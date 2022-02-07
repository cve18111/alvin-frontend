import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';

function HeroDSGVO() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Privacy Policy </span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">General Terms and Condition</h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              
              </div>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center mb-12" data-aos="zoom-y-out" data-aos-delay="450">
            
              <h3 className="text-x2 text-gray-600 mb-12" data-aos="zoom-y-out" data-aos-delay="150">Welcome to https://limytd.com (the “Site”). We understand 
              that privacy online is important to users of our Site, especially when conducting business. This statement governs our privacy policies with respect to those 
              users of the Site (“Visitors”) who visit without transacting business and Visitors who register to transact business on the Site and make use of the various 
              services offered by Limytd AG (collectively, “Services”) (“Authorized Customers”).
              <br/><br/>
              “Personally Identifiable Information”
              <br/><br/>
              refers to any information that identifies or can be used to identify, contact, or locate the person to whom such information pertains, including, but not limited to, name, address, phone number, fax number, email address, financial profiles, social security number, and credit card information. Personally Identifiable Information does not include information that is collected anonymously (that is, without identification of the individual user) or demographic information not connected to an identified individual.
              <br/><br/>
              What Personally Identifiable Information is collected?
              <br/><br/>
              We may collect basic user profile information from all of our Visitors. We collect the following additional information from our Authorized Customers: the names, addresses, phone numbers and email addresses of Authorized Customers, the nature and size of the business, and the nature and size of the advertising inventory that the Authorized Customer intends to purchase or sell.
              <br/><br/>
              What organizations are collecting the information?
              <br/><br/>
              In addition to our direct collection of information, our third party service vendors (such as credit card companies, clearinghouses and banks) who may provide such services as credit, insurance, and escrow services may collect this information from our Visitors and Authorized Customers. We do not control how these third parties use such information, but we do ask them to disclose how they use personal information provided to them from Visitors and Authorized Customers. Some of these third parties may be intermediaries that act solely as links in the distribution chain, and do not store, retain, or use the information given to them.
              <br/><br/>
              How does the Site use Personally Identifiable Information?
              <br/><br/>
              We use Personally Identifiable Information to customize the Site, to make appropriate service offerings, and to fulfill buying and selling requests on the Site. We may email Visitors and Authorized Customers about research or purchase and selling opportunities on the Site or information related to the subject matter of the Site. We may also use Personally Identifiable Information to contact Visitors and Authorized Customers in response to specific inquiries, or to provide requested information.
              <br/><br/>
              With whom may the information may be shared?
              <br/><br/>
              Personally Identifiable Information about Authorized Customers may be shared with other Authorized Customers who wish to evaluate potential transactions with other Authorized Customers. We may share aggregated information about our Visitors, including the demographics of our Visitors and Authorized Customers, with our affiliated agencies and third party vendors. We also offer the opportunity to “opt out” of receiving information or being contacted by us or by any agency acting on our behalf
              <br/><br/>
              How is Personally Identifiable Information stored?
              <br/><br/>
              Personally Identifiable Information collected by Limytd AG is securely stored and is not accessible to third parties or employees of Limytd AG except for use as indicated above.
              <br/><br/>
              What choices are available to Visitors regarding collection, use and distribution of the information?
              <br/><br/>
              Visitors and Authorized Customers may opt out of receiving unsolicited information from or being contacted by us and/or our vendors and affiliated agencies by responding to emails as instructed, or by contacting us at Chamerstrasse 172 6300 Zug Schweiz Cookies A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns.
              <br/><br/>
              Are Cookies Used on the Site?
              <br/><br/>
              Cookies are used for a variety of reasons. We use Cookies to obtain information about the preferences of our Visitors and the services they select. We also use Cookies for security purposes to protect our Authorized Customers. For example, if an Authorized Customer is logged on and the site is unused for more than 10 minutes, we will automatically log the Authorized Customer off. Visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using https://limytd.com, with the drawback that certain features of website may not function properly without the aid of cookies.
              <br/><br/>
              Cookies used by our service providers
              <br/><br/>
              Our service providers use cookies and those cookies may be stored on your computer when you visit our website. You can find more details about which cookies are used in our cookies info page.
              <br/><br/>
              How does Limytd AG use login information?
              <br/><br/>
              Limytd AG uses login information, including, but not limited to, IP addresses, ISPs, and browser types, to analyze trends, administer the Site, track a user’s movement and use, and gather broad demographic information.
              <br/><br/>
              What partners or service providers have access to Personally Identifiable Information from Visitors and/or Authorized Customers on the Site?
              <br/><br/>
              Limytd AG has entered into and will continue to enter into partnerships and other affiliations with a number of vendors. Such vendors may have access to certain Personally Identifiable Information on a need to know the basis for evaluating Authorized Customers for service eligibility. Our privacy policy does not cover their collection or use of this information. Disclosure of Personally Identifiable Information to comply with the law. We will disclose Personally Identifiable Information in order to comply with a court order or subpoena or a request from a law enforcement agency to release information. We will also disclose Personally Identifiable Information when reasonably necessary to protect the safety of our Visitors and Authorized Customers.
              <br/><br/>
              How does the Site keep Personally Identifiable Information secure?
              <br/><br/>
              All of our employees are familiar with our security policy and practices. The Personally Identifiable Information of our Visitors and Authorized Customers is only accessible to a limited number of qualified employees who are given a password in order to gain access to the information. We audit our security systems and processes on a regular basis. Sensitive information, such as credit card numbers or social security numbers, is protected by encryption protocols, in place to protect information sent over the Internet. While we take commercially reasonable measures to maintain a secure site, electronic communications and databases are subject to errors, tampering, and break-ins, and we cannot guarantee or warrant that such events will not take place and we will not be liable to Visitors or Authorized Customers for any such occurrences.
              <br/><br/>
              How can Visitors correct any inaccuracies in Personally Identifiable Information?
              <br/><br/>
              Visitors and Authorized Customers may contact us to update Personally Identifiable Information about them or to correct any inaccuracies by emailing us at office@limytd.net
              <br/><br/>
              Can a Visitor delete or deactivate Personally Identifiable Information collected by the Site?
              <br/><br/>
              We provide Visitors and Authorized Customers with a mechanism to delete/deactivate Personally Identifiable Information from the Site’s database by contacting. However, because of backups and records of deletions, it may be impossible to delete a Visitor’s entry without retaining some residual information. An individual who requests to have Personally Identifiable Information deactivated will have this information functionally deleted, and we will not sell, transfer, or use Personally Identifiable Information relating to that individual in any way moving forward. Your rights These are summarized rights that you have under data protection law
              <br/><br/>
              The right to access
              The right to rectification
              The right to erasure
              The right to restrict processing
              The right to object to processing
              The right to data portability
              The right to complain to a supervisory authority
              The right to withdraw consent
              <br/><br/>
              What happens if the Privacy Policy Changes?
              <br/><br/>
              We will let our Visitors and Authorized Customers know about changes to our privacy policy by posting such changes on the Site. However, if we are changing our privacy policy in a manner that might cause disclosure of Personally Identifiable Information that a Visitor or Authorized Customer has previously requested not be disclosed, we will contact such Visitor or Authorized Customer to allow such Visitor or Authorized Customer to prevent such disclosure.
              <br/><br/>
              Links:
              <br/><br/>
              https://limytd.com contains links to other websites. Please note that when you click on one of these links, you are moving to another website. We encourage you to read the privacy statements of these linked sites as their privacy policies may differ from ours.
              <br/><br/>
              </h3>

        </div>
      </div>
      </div>
      </div>
    </section>
  );
}

export default HeroDSGVO;