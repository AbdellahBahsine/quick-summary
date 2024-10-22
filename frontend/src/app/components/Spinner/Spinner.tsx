const Spinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          border: 8px solid rgba(0, 0, 0, 0.1);
          border-left-color: #3498db;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
);

export default Spinner;