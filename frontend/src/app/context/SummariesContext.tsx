'use client';

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Summary {
  id: string;
  title: string;
  author: string;
  description: string;
  content: string;
}

interface SummariesContextType {
  summaries: Summary[];
  mySummaries: Summary[];
  summary: Summary | null;
  fetchSummaries: () => Promise<void>;
  fetchMySummaries: () => Promise<void>;
  fetchSummaryById: (id: string) => Promise<Summary | null>;
  addSummary: (summary: Omit<Summary, 'id'>) => Promise<void>;
  updateSummary: (id: string, summary: Omit<Summary, 'id'>) => Promise<void>;
  deleteSummary: (id: number) => Promise<void>;
}

const SummariesContext = createContext<SummariesContextType | undefined>(undefined);

export const SummariesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [summaries, setSummaries] = useState<Summary[]>([]);
    const [mySummaries, setMySummaries] = useState<Summary[]>([]);
    const [summary, setSummary] = useState<Summary | null>(null);

    const router = useRouter();

    const token = localStorage.getItem('accessToken');

    const axiosInstance = axios.create({
        baseURL: '/api',
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });

    const fetchSummaries = async () => {
        try {
            const response = await axiosInstance.get('/summaries');
            setSummaries(response.data);
        } catch (error) {
            console.error('Error fetching summaries:', error.response?.data || error.message);
        }
    };

    const fetchMySummaries = async () => {
        try {
            const response = await axiosInstance.get('/my-summaries');
            setMySummaries(response.data);
        } catch (error) {
            console.error('Error fetching my summaries:', error.response?.data || error.message);
        }
    }

    const fetchSummaryById = async (id: string) => {
        try {
            const response = await axiosInstance.get(`/summaries/${id}`);
            console.log("response",response.data);
            setSummary(response.data);
        } catch (error) {
            console.error('Error fetching summary:', error.response?.data || error.message);
            return null;
        }
    };

    const addSummary = async (summary: Omit<Summary, 'id'>) => {
        try {
        const response = await axiosInstance.post('/my-summaries', summary);
        setSummaries((prev) => [...prev, response.data]);
        setMySummaries((prev) => [...prev, response.data]);
        router.push('/my-summaries');
        } catch (error) {
        console.error('Error adding summary:', error.response?.data || error.message);
        }
    };

    const updateSummary = async (id: string, summary: Omit<Summary, 'id'>) => {
        try {
            const response = await axiosInstance.put(`/my-summaries/${id}`, summary);
            setSummaries((prev) => prev.map((s) => (s.id === id ? response.data : s)));
            setMySummaries((prev) => prev.map((s) => (s.id === id ? response.data : s)));
            router.push('/my-summaries');
        } catch (error) {
            console.error('Error updating summary:', error.response?.data || error.message);
        }
    };

    const deleteSummary = async (id: string) => {
        try {
        await axiosInstance.delete(`/my-summaries/${id}`);
        setSummaries((prev) => prev.filter((s) => s.id !== id));
        setMySummaries((prev) => prev.filter((s) => s.id !== id));
        } catch (error) {
        console.error('Error deleting summary:', error.response?.data || error.message);
        }
    };

    return (
        <SummariesContext.Provider value={{ summaries, mySummaries, summary, fetchSummaries, fetchMySummaries, fetchSummaryById, addSummary, updateSummary, deleteSummary }}>
        {children}
        </SummariesContext.Provider>
    );
};

export const useSummaries = () => {
  const context = useContext(SummariesContext);
  if (context === undefined) {
    throw new Error('useSummaries must be used within a SummariesProvider');
  }
  return context;
};
