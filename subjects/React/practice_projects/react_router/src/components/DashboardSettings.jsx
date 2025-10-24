function DashboardSettings() {
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <div>
          <label>
            <input type="checkbox" />
            Email notifications
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Dark mode
          </label>
        </div>
        <button>Save Settings</button>
      </div>
    </div>
  );
}

export default DashboardSettings;
