const date = new Date();
    document.getElementById('day').textContent = date.toLocaleDateString('en-US', { weekday: 'short' }) + ',';
    document.getElementById('date').textContent = date.toDateString().slice(4);