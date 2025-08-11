import React from 'react';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Legal Information</h1>

      {/* Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          At EthicBizz, your privacy is of utmost importance. We are committed to protecting the personal information of all our users — including students, parents, mentors, schools, and contributors.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>We collect information such as name, grade, email, and project preferences solely to personalize learning experiences and provide relevant mentorship.</li>
          <li>Your data is stored securely and never sold to third parties.</li>
          <li>We may collect anonymized usage data to improve our website and educational platform.</li>
          <li>All form submissions (e.g., contact, mentor interest, school onboarding) use Web3Forms for secure handling.</li>
          <li>Users can request data deletion by emailing: <strong>hello@ethicbizz.org</strong>.</li>
        </ul>
      </section>

      {/* Terms of Service */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Terms of Service</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          By accessing and using the EthicBizz website and its services, you agree to abide by the following terms:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You will use the platform for educational purposes only.</li>
          <li>All content, courses, and materials are the intellectual property of EthicBizz and may not be redistributed without consent.</li>
          <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
          <li>You agree not to engage in plagiarism, misinformation, or harassment on any of our platforms.</li>
          <li>EthicBizz reserves the right to suspend accounts found violating our code of conduct or integrity values.</li>
        </ul>
      </section>

      {/* Cookies Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cookies Policy</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We use cookies and similar tracking technologies to enhance your browsing experience and provide tailored content.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Cookies may be used to remember login sessions, track page analytics, or personalize content.</li>
          <li>You can disable cookies in your browser settings without impacting access to most parts of the site.</li>
        </ul>
      </section>

      {/* Code of Conduct */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Code of Conduct</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          EthicBizz is committed to building a safe, inclusive, and ethical learning environment for everyone.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Be respectful of diverse backgrounds, cultures, and viewpoints.</li>
          <li>Zero tolerance for discrimination, bullying, or unethical behavior.</li>
          <li>Contribute positively in discussions, group projects, and forums.</li>
          <li>Report inappropriate behavior to <strong>ethics@ethicbizz.org</strong>.</li>
        </ul>
      </section>

      {/* Contributor License Agreement */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contributor License Agreement (CLA)</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Contributors to our open-source tools, curriculum, or design systems agree to the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You retain copyright of your contributions but license them to EthicBizz under MIT or CC-BY terms.</li>
          <li>You certify that your contributions are original and do not infringe on others’ rights.</li>
          <li>You understand your contributions may be modified to align with educational goals.</li>
        </ul>
      </section>

      {/* Mentor Agreement */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Mentor Agreement</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Mentors are essential to the success of our students. To ensure ethical and impactful engagement, all mentors agree to:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Provide guidance aligned with student interest, not personal agendas.</li>
          <li>Respect student boundaries and prioritize their wellbeing.</li>
          <li>Model ethical innovation, equity, and transparency.</li>
          <li>Report any conflicts of interest or concerns immediately.</li>
        </ul>
      </section>
    </div>
  );
};

export default Legal;
