"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
  loading: boolean;
  fetchSummaries: (
    page: number,
    limit: number,
    title: string,
    setTotal: (total: number) => void
  ) => Promise<void>;
  fetchMySummaries: (
    page: number,
    limit: number,
    setTotal: (total: number) => void
  ) => Promise<void>;
  fetchSummaryById: (id: string) => Promise<void>;
  addSummary: (summary: Omit<Summary, "id">) => Promise<void>;
  updateSummary: (id: string, summary: Omit<Summary, "id">) => Promise<void>;
  deleteSummary: (id: string) => Promise<void>;
}

type Params = {
  page: number;
  limit: number;
  title?: string;
};

const SummariesContext = createContext<SummariesContextType | undefined>(
  undefined
);

export const SummariesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [summaries, setSummaries] = useState<Summary[]>([]);
  const [mySummaries, setMySummaries] = useState<Summary[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("accessToken");
  }
  const axiosInstance = axios.create({
    baseURL: "/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const fetchSummaries = async (
    page: number,
    limit: number,
    title = "",
    setTotal: (total: number) => void
  ) => {
    try {
      setLoading(true);

      const params: Params = { page, limit };

      if (title) {
        params.title = title;
      }

      const response = await axiosInstance.get("/summaries", {
        params,
      });

      setSummaries(response.data.summaries);
      setTotal(response.data.total);
    } catch {}

    setLoading(false);
  };

  const fetchMySummaries = async (
    page: number,
    limit: number,
    setTotal: (total: number) => void
  ) => {
    try {
      setLoading(true);

      const params: Params = { page, limit };

      const response = await axiosInstance.get("/my-summaries", {
        params,
      });
      setMySummaries(response.data.summaries);
      setTotal(response.data.total);
    } catch {}

    setLoading(false);
  };

  const fetchSummaryById = async (id: string): Promise<void> => {
    try {
      const response = await axiosInstance.get(`/summaries/${id}`);
      setSummary(response.data);
    } catch {}
  };

  const addSummary = async (summary: Omit<Summary, "id">) => {
    try {
      const response = await axiosInstance.post("/my-summaries", summary);
      setSummaries((prev) => [...prev, response.data]);
      setMySummaries((prev) => [...prev, response.data]);
      router.push("/my-summaries");
    } catch {}
  };

  const updateSummary = async (id: string, summary: Omit<Summary, "id">) => {
    try {
      const response = await axiosInstance.put(`/my-summaries/${id}`, summary);
      setSummaries((prev) =>
        prev.map((s) => (s.id === id ? response.data : s))
      );
      setMySummaries((prev) =>
        prev.map((s) => (s.id === id ? response.data : s))
      );
      router.push("/my-summaries");
    } catch {}
  };

  const deleteSummary = async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`/my-summaries/${id}`);
      setSummaries((prev) => prev.filter((s) => s.id !== id));
      setMySummaries((prev) => prev.filter((s) => s.id !== id));
    } catch {}
  };

  return (
    <SummariesContext.Provider
      value={{
        summaries,
        mySummaries,
        summary,
        loading,
        fetchSummaries,
        fetchMySummaries,
        fetchSummaryById,
        addSummary,
        updateSummary,
        deleteSummary,
      }}
    >
      {children}
    </SummariesContext.Provider>
  );
};

export const useSummaries = () => {
  const context = useContext(SummariesContext);
  if (context === undefined) {
    throw new Error("useSummaries must be used within a SummariesProvider");
  }
  return context;
};
