document.getElementById('fullLoginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('userEmail').value;
    const password = document.getElementById('userPassword').value;

    try {
        // ផ្ញើទិន្នន័យទៅកាន់ API
        const response = await fetch('https://api.example.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await response.json();

        if (response.ok) {
            // បើ Login ជោគជ័យ
            alert("ស្វាគមន៍មកវិញ! " + data.userName);
            localStorage.setItem('userToken', data.token); // រក្សាទុក Token
            window.location.href = "index.html";
        } else {
            // បើ Login បរាជ័យ (Email ឬ Password ខុស)
            alert("កំហុស៖ " + data.message);
        }
    } catch (error) {
        console.error("មានបញ្ហាជាមួយការតភ្ជាប់៖", error);
        alert("មិនអាចតភ្ជាប់ទៅកាន់ Server បានទេ!");
    }
});