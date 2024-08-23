import './Blog.css';
import React, { useState } from 'react';

function Blog() {
  return (
    <div className="blog">
        <header className="blog-header">
            <h1>Blogs</h1>
            <p>Discover, Read, Connect: A Collection of Engaging Blogs</p>
        </header>
        <div class="content">
            <div class="recent-blogs">
                <h2>Recent blogs</h2>
                <ul>
                    <li>Microsoft is set to enforce multi-factor authentication (MFA) for Azure users starting this month to enhance security (<a href="#">BleepingComputer</a>).</li>
                    <li>China's leaders warn of economic risks and call for stronger social controls (<a href="#">Google News</a>).</li>
                    <li>Alabama set to execute convicted murderer, then skip autopsy (<a href="#">Google News</a>).</li>
                    <li>Stock market news today: Nasdaq futures dig out of tech rout as TSMC shines (<a href="#">Google News</a>).</li>
                </ul>
            </div>
            <div class="blog-list">
                <div class="blog-item">
                    <h3>AWS</h3>
                    <p>Harness Generative AI with AWS App Studio and Amazon Q</p>
                    <p>Discover the latest tools from AWS, including App Studio and Amazon Q, which enable non-technical users to create AI-powered applications through natural language prompts. Enhance your productivity with these user-friendly solutions for app development and data insights.</p>
                </div>
                <div class="blog-item">
                    <h3>Oracle</h3>
                    <p>Oracle Fusion Cloud Enterprise Performance Management July 2024 Update</p>
                    <p>Oracle has rolled out its latest updates for the Enterprise Performance Management (EPM) platform. Key enhancements include improved transaction matching, streamlined financial consolidation, and new tools for predictive cash forecasting. These updates aim to enhance financial reporting accuracy and inter-team collaboration (<a href="#">Oracle</a>) (<a href="#">Opkey</a>).</p>
                </div>
                <div class="blog-item">
                    <h3>AWS</h3>
                    <p>Fine-Tuning Claude 3 Haiku on Amazon Bedrock</p>
                    <p>AWS announces the availability of Anthropic’s Claude 3 Haiku for fine-tuning, allowing developers to customize the model with their data to create domain-specific AI applications while maintaining security and privacy.</p>
                </div>
            </div>
        </div>
        <footer>
            <p>Follow the latest trends</p>
            <form>
                <input type="email" placeholder="you@example.com"/>
                <button type="submit">Submit</button>
            </form>
        </footer>
    </div>
  );
}

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
      console.log('Form submitted with email:', email);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};




export default Blog;