<h1>Blood Bank Web Application</h1>

<p>A comprehensive web application designed to streamline the process of blood donation and requests, connecting donors and recipients through an intuitive and user-friendly platform. Built using Node.js, Express, MongoDB, and React, this application also includes analytics to monitor and visualize the availability of different blood types, enabling efficient blood supply management.</p>

<h2>Features</h2>
<ul>
  <li><strong>User Registration and Authentication</strong>: Secure login for donors, recipients, and administrators.</li>
  <li><strong>Donation Requests</strong>: Users can request specific blood groups, with notifications to potential donors.</li>
  <li><strong>Donation Management</strong>: Donors can register their availability and update donation records.</li>
  <li><strong>Real-Time Analytics</strong>: Visual representation of blood group availability to help manage supply levels effectively.</li>
  <li><strong>Dashboard</strong>: An admin dashboard to track donations, requests, and manage user data.</li>
  <li><strong>Responsive Design</strong>: Optimized for mobile and desktop use, ensuring a seamless experience across devices.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend</strong>: React</li>
  <li><strong>Backend</strong>: Node.js, Express</li>
  <li><strong>Database</strong>: MongoDB</li>
  <li><strong>Libraries &amp; Tools</strong>:
    <ul>
      <li>Chart.js for data visualization</li>
      <li>JWT for authentication</li>
      <li>Axios for API calls</li>
      <li>Mongoose for MongoDB object modeling</li>
    </ul>
  </li>
</ul>

<h2>Installation</h2>
<ol>
  <li><strong>Clone the repository</strong>
    <pre><code>git clone https://github.com/yourusername/blood-bank-app.git
cd blood-bank-app
    </code></pre>
  </li>

  <li><strong>Install dependencies for the backend</strong>
    <pre><code>
npm install
    </code></pre>
  </li>

  <li><strong>Install dependencies for the frontend</strong>
    <pre><code>cd ../client
npm install
    </code></pre>
  </li>

  <li><strong>Set up environment variables</strong>

    <p>Create a <code>.env</code> file in the <code>backend</code> directory with the following details:</p>
    <pre><code>MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
    </code></pre>
  </li>

  <li><strong>Run the application</strong>

    <p>In the backend folder, run:</p>
    <pre><code>npm start
    </code></pre>

    <p>In the frontend folder, run:</p>
    <pre><code>npm start
    </code></pre>

    <p>The application should be available at <code>http://localhost:3000</code>.</p>
  </li>
</ol>

<h2>Usage</h2>
<ol>
  <li><strong>Registration</strong>: Users can sign up as donors, recipients, or administrators.</li>
  <li><strong>Blood Requests</strong>: Recipients can submit blood requests, and donors are notified of requests that match their blood group.</li>
  <li><strong>Analytics Dashboard</strong>: Visual charts display the availability of each blood type, helping administrators to track and manage the supply.</li>
  <li><strong>Profile Management</strong>: Users can update their information and manage their donation history.</li>
</ol>

<h2>Screenshots</h2>
<p>(Add screenshots here)</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Please fork the repository, make your changes, and open a pull request.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License.</p>




