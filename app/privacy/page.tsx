import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-blue dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: January 14, 2026</p>
          
          <p>At GACKX, accessible from vlovsol.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GACKX and how we use it.</p>

          <h2>1. Information We Collect</h2>
          <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
          <ul>
            <li><strong>Account Information:</strong> When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</li>
            <li><strong>Workflow Data:</strong> We collect data related to the automations you build, including API keys (encrypted), tool connections, and execution logs.</li>
            <li><strong>Usage Data:</strong> We collect information about how you interact with our platform to improve our services.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect in various ways, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our platform</li>
            <li>Improve, personalize, and expand our platform</li>
            <li>Understand and analyze how you use our platform</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Process your transactions and manage your subscriptions</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2>3. Log Files</h2>
          <p>GACKX follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

          <h2>4. Cookies and Web Beacons</h2>
          <p>Like any other website, GACKX uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

          <h2>5. Google DoubleClick DART Cookie</h2>
          <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.</p>

          <h2>6. Data Security</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

          <h2>7. GDPR Data Protection Rights</h2>
          <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul>
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
            <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
          </ul>

          <h2>8. Contact Us</h2>
          <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at hello@gackx.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
