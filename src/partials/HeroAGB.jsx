import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/app.png';

function HeroAGB() {

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> AGB </span>
            <span className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"></span></h1>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">General Terms und Condition</h2>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
              
              </div>
            </div>

          </div>
          {/* AGB small text */}
          <div>
            <div className="relative flex justify-center mb-12" data-aos="zoom-y-out" data-aos-delay="450">
            
              <h3 className="text-x2 text-gray-600 mb-12" data-aos="zoom-y-out" data-aos-delay="150">These General Terms and Conditions (“GTC”) apply to any use of the website limytd.com as created and operated by Limytd AG, Chamerstrasse 172, 6300 Zug, Switzerland and all content of or provided by the Academy to you/the User by any means 
              (such by content like texts, videos, pictures, logos, or music made available online or through digital means respectively, provided during online or live sessions, 
              seminars, or sent by e-mail to the user, “Content”) (the online platform accessible under limytd.com with all its Content the “Academy”). The terms “you” and “User” 
              are used throughout the text with reference to all individuals and/or entities acc    essing the Academy and all its websites this for any purpose or reasons. <br/><br/> Please read these terms carefully because all uses of the Content are subject to these GTC. By using the Content, you are acknowledging that you have read this and agree to it. 

If you are not in agreement with our terms and conditions, then you should refrain from further use of the Content. In addition, your continued use of the Content following the posting of any updates or changes to our terms and conditions shall mean that you are in agreement and acceptance of such changes.
<br/><br/>
By using any websites or Content of the Academy, you agree to these GTC.
<br/><br/>
You must also be at least eighteen years old to use the Content without supervision by a guardian. If you are under 18 years of age, you may not use the Content or purchase any products or services from the Academy without the supervision of your parent or guardian.
<br/><br/>
We reserve the right to amend or change all or parts of these GTC from time to time. Any such amendments or changes will be posted here and shall constitute the new terms and conditions for the Academy from the time they are posted.
<br/><br/>
Neither the Academy nor the Content constitute an offer, recommendation or solicitation to sell any financial instruments or securities and does not contain any professional, investment, legal, tax or other advice.
<br/><br/>
The Academy and the Content are intended solely for non-commercial, personal use. Permissible uses of the Content includes all uses which would normally be associated with Content of this nature for such non-commercial, personal use. For example, the Content may include videos or posts – you may view and replay them, but not download, copy or modify them provided it is not expressly permitted (for example by expressly providing downloading instructions).<br/><br/>

You may only use a standard web-browser (e.g. on a desktop, laptop, or similar computer, or on a portable device such as a tablet, smartphone, or other mobile device) to access the Content. All other software to access the Content is in violation of these GTC. Therefore, you may not employ any automated device, software tools, harvester, extractor, scraper, spider, robot, program, code, script, algorithm or methodology, or any similar or equivalent manual process, to access, acquire, or copy the Content or any portion thereof. You may not reproduce the Content or portions thereof in any way.<br/><br/>

You also agree not to use of a confusingly similar domain name and not to claim or suggest ownership or control of the Content, nor to imply or suggest any non-existent affiliation with the Academy, Limytd AG or the Content.<br/><br/>

You also may not attempt to gain unauthorized access of any kind to the Content via any means including hacking, password guessing, backdoors, code injection, or any other means. You also agree that you will not engage in any activities using the Content that violate applicable laws or regulations in your local jurisdiction.<br/><br/>

When posting comments or questions, you agree not to use such opportunities for spamming, linking to other software, products, or services of third parties, or attacking other users. You are also not posting any comments that may be considered as abusive, offensive, discriminating, deceptive, racist, sexist, extremely religious or politically biased or that may be subject to criminal charges. You understand and agree that any such prohibited uses may result in the loss of access to the Content without warning or refund.
<br/><br/>
2. Purchase of Content
By purchasing Content, in particular by clicking on “I accept the Terms & Conditions for the purchase”, the contract is bindingly and validly concluded the User is obliged to pay the fee pursuant to clause 4. In return, the User receives access to the respective Content purchased by the User on the Academy. When registering and purchasing Content, you must provide only true and accurate information, which is current and complete and you must have the permissions to use any information provided to the Academy. If you registering on behalf of a company or other entity, you must have proper authority to commit that company.
<br/><br/>
No Refunds
User warrants that they inspected the Content and that it is adequate to their needs. By purchasing Content and upon receiving access thereto, User expressly consents to the loss of all rights of withdrawal and that they shall not be, ever, entitled to any refund, rebate, compensation or restitution for any reason whatsoever, even in the case of material flaws.
 
<br/><br/>
The Academy provides the Contents as shown on its websites or as provided to you through other digital means or during live sessions at respective point in time. The services are provided by the Academy carefully and diligently by applying all its current knowledge and experience. The Academy may at any time change, remove, or archive Content at its own discretion without prior notice.<br/><br/>

From time to time the Academy may suspend and/or deny access to the Academy for updates, maintenance (scheduled or unscheduled), enhancements, upgrades, improvements, or corrections, or to maintain or improve security. The Academy or services may not always be available for reasons beyond the control of the Academy. The Academy may at any time and without prior notice postpone and/or cancel a training or live-session. Such temporary suspension, delay, postponement or rescheduling of Content, such as live-sessions or online courses, remains at the discretion of the Academy and does not lead to any reimbursements of fees already paid by the User. <br/><br/>

The fees (plus VAT, if any) are payable in Bitcoin (BTC), Ethereum (ETH) or any other crypto currency as accepted as a means of payment by the Academy to a wallet as specified and communicated by the Academy to you. The Academy reserves the right to change the fees and modify offers at any time. A partial use of the Content does not entitle the User to a reduction of the fee.<br/><br/>

In case of late payments default interest and processing fees will be charged. Failure to pay does not qualify as withdrawal from the contract or deregistration.
<br/><br/>
5. Deregistration & termination
The User terminates these terms by deregistering from the Academy by way of deletion of his account. If a User deregisters from the Academy, any unpaid fees remain owed and any fees already paid will not be reimbursed. Upon deregistration, your right to use the Content will automatically terminate immediately. The Academy will not have any liability whatsoever to you for any suspension or termination. All provisions of the GTC which by their nature should survive termination of Services will do so, including Sections 6 – 16.
<br/><br/>
The Academy reserves the right to deregister a User from the Academy or take other appropriate actions for just cause, such as non-payment of the fees, violation of clause 6 (Copyright / Confidentiality and Right of Use). In such cases (i) the User is obliged to delete any and all information acquired from the Academy or provided by the Academy (including documents, videos, recordings of seminars or the like), (ii) immediately refrain from the usage of any information acquired from the Academy or provided by the Academy, and (iii) pay any outstanding fees owed, i.e. there is neither a proportional refund nor a waiver of the fee. Clause 6 (Liquidated Damages) remains reserved.
<br/><br/>
6. Copyright / Confidentiality and right of use
Any and all Content is protected by copyright, trademark and other rights and is the property of the Academy or its content suppliers. The Academy reserves the exclusive right to the compilation of the Content. The User is not entitled to (1) make use, modify or remove any copyright notices, trademarks or other reservations of or ownership rights from the Content or (2) to register, operate, or lease any domain with a similar name to any such mark(s) of the Academy.
<br/><br/>
All Content and other information provided by the Academy to the User is subject to strict confidentiality. The User acquires for the duration of the registration, subject to full payment of all outstanding fees, a limited, non-exclusive, non-transferable right of use exclusively for his/her own use. The files, videos, documents and any other information may only be accessed (if a download is in a given case permitted, downloaded) by Users and only for their own further training. The User may only copy or download Content that is expressly provided for that purpose. The User is not granted any exploitation rights; in particular, he/she may not record the Content, download it, process it either digitally or in printed form, copy it, sell it, edit it, modify, adapt, reproduce, reuse, publish or make it accessible, forward or disclose it to third parties in any other form, whether in whole or in part.
<br/><br/>
Each User is obliged to keep his/her login credentials confidential, not to share them with or pass them on to third parties, and to comply with all password security policies including password change and complexity requirements.
<br/><br/>
Users are not permitted to create and distribute any advertising material or Content under the name of Limytd AG or Academy without prior written consent of Limytd AG.
<br/><br/>
This clause (Confidentiality and Right of Use) continues to apply also after deregistration.
<br/><br/>
Liquidated damages
In the event of use of the Content in violation of the GTC, the User agrees to pay liquidated damages to the Academy in the amount of BTC 2 for each infringement. Irrespective of the payment of the liquidated damages, the User shall continue to be obliged to comply with his/her obligations pursuant to these GTC. In addition, any damage exceeding the liquidated damages can be claimed against the User.
<br/><br/>
The Academy makes no warranties, expressed or implied, regarding the Academy, the Content, its use or result of use. In particular the Academy does not warrant that the Content is true, complete, error-free, reliable and accurate. All Content is provided “as is” without any warranties of any kind, including warranty of merchantability, fitness for particular purpose and non-infringement. The Academy further does not warrant that the Academy will be regularly updated, changed or amended.
<br/><br/>
Testimonials written by Users and any statistical results or summaries of user surveys do to constitute a warranty of the Academy.
<br/><br/>
Liability
the Academy disclaims any and all liability and the Academy shall accordingly not be held liable for any damages, whether direct or indirect, incidental, or consequential damages, including lost profits, goodwill or data that may arise from access to or inability to access the Academy, from the Content or individual elements thereof and from the use of the Academy and/or the Content. The access to the Academy and use of the Content and any other information provided by the Academy to the User and any results as a consequence of actions taken or failed to be taken based on the Content are at the User’s own risk.
<br/><br/>
In particular, the Academy is not liable for damages and/or losses due to viruses, malware, unauthorized access, force majeure or the like that arise in connection with the use of the Academy or due to investment transactions made on the basis of information available on the Academy.
<br/><br/>
The User further expressly acknowledges that the Academy shall not be held liable for the conduct of any third party and that the risk of receiving, possessing, transferring and using crypto currencies, based on the information provided on the Academy, rests entirely with the User.
<br/><br/>
If the liability cannot be excluded in case of mandatorily applicable law, such liability shall be capped at USD 1,000 AND shall IN NOW WAY INCLUDE PUNITIVE DAMAGES.
<br/><br/>
Indemnity
The User agrees to fully indemnify, and hold the Academy (including its officers, directors, employees, agents) harmless, from and against any claims, actions, demands, losses, damages resulting from and/or relating to the User’s use or misuse of the Academy and/or the Content, breach of these GTC, or violation of any rights of a third party.
<br/><br/>
Links to other sites or external resources
The Academy may provide links to external sites that provide useful resources, products, or services that may be useful to you. Where such external resources are third party owned and operated, they are not prepared by, offered by, or controlled by the Academy. The Academy is not responsible in any way for the quality, content, nature, applicability, or reliability of third party resources and the provision of links to external resources does not necessarily imply affiliation, endorsement, or adoption of those resources.
<br/><br/>
Technical requirements
The access and use of the Academy requires appropriate compatible devices. It is the User’s responsibility to set or maintain the devices in a condition that enables the access and use of the Academy.
<br/><br/>
The Academy does not guarantee that the internet connection functions faultlessly and without interruption. Technical problems that are not demonstrably caused by the Academy do not entitle the User to a chargeback or any other claims.
<br/><br/>
Data Protection
The processing of personal data is carried out in accordance with the Academy’s privacy policy available at [insert link]. With the registration the User confirms that he/she has taken note of the privacy policy and the processing of his/her personal data described therein.
<br/><br/>
General provisions
Electronic communications
Communications between you and the Academy use electronic means, whether made via the websites of the Academy, included in the Content made available by the Academy, or sent via e-mail by the Academy. For contractual purposes, you (1) consent to receive communications from the Academy in an electronic form; and (2) you agree that all terms and conditions, agreements, notices, disclosures, and other communications that the Academy provides to you electronically satisfy any legal requirement that such communications would satisfy if it were to be in writing.
<br/><br/>
Assignment
The User may not assign or pledge any claims or rights against the Academy.
<br/><br/>
Severability
If any portion of these terms is held invalid or unenforceable, that portion will be construed in a manner to reflect, as nearly as possible, the original intention of the parties according to these GTC, and the remaining portions will remain in full force and effect.  
<br/><br/>
Waiver
Any waiver or failure to enforce any provision of the GTC on one occasion will not be deemed a waiver of any other provision or of such provision on any other occasion.
<br/><br/>
Notice
Where the Academy requires that you provide an e-mail address, you are responsible for providing the Academy with your most current e-mail address. In the event that the last e-mail address you provided to the Academy is not valid, or for any reason is not capable of delivering to you any notices required/permitted by the GTC, the Academy’s dispatch of the e-mail containing such notice will nonetheless constitute effective notice. You may give notice to the Academy at the following address: Chamerstrasse 172, 6300 Zug, Switzerland. Such notice will be deemed given when received by the Academy by letter delivered at this address.
<br/><br/>
Entire Agreement
These GTC are the final, complete and exclusive agreement between you and the Academy with respect to the subject matter hereof and supersedes and merges all prior discussions between you and the Academy with respect to such subject matter.
<br/><br/>
Applicable law and Jurisdiction
THE TERMS AND ANY ACTION RELATED THERETO WILL BE GOVERNED AND INTERPRETED BY AND UNDER THE LAWS OF SWITZERLAND WITHOUT GIVING EFFECT TO ANY PRINCIPLES THAT PROVIDE FOR THE APPLICATION OF THE LAW OF ANOTHER JURISDICTION. THE UNITED NATIONS CONVENTION ON CONTRACTS FOR THE INTERNATIONAL SALE OF GOODS DOES NOT APPLY TO THESE TERMS.
<br/><br/>
Both you and the Academy agree that all claims and disputes arising out of or relating to the Terms will be litigated exclusively in the ordinary courts of the city of Zug, Switzerland.
<br/><br/>
International Use
The Academy is controlled and operated by Limytd AG from its head offices in Zug, Switzerland. Limytd AG makes no representation that the Academy or its content are appropriate or legal for use in any locations outside of Switzerland. Users accessing the Academy outside of Switzerland are themselves responsible for compliance with all applicable local laws. Accessing the Academy from any country where the contents are deemed illegal is prohibited.</h3>
             
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroAGB;