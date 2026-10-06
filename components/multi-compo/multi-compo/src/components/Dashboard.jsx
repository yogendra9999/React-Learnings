function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Users</h3>
          <p>1,250</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>540</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹85,000</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;