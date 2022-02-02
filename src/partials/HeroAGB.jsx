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
            
              <h3 className="text-x2 text-gray-600 mb-12" data-aos="zoom-y-out" data-aos-delay="150">Diese Allgemeinen Geschäftsbedingungen ("AGB") gelten für die Nutzung der von alvin.decoderate.com Südrandstraße 15, 1230 Wien erstellten und betriebenen Website alvin.decoderate.com sowie für alle Inhalte, die von der Akademie in irgendeiner Form (z.B. Texte, Videos, Bilder, Logos oder Musik, die online oder auf digitalem Wege zur Verfügung gestellt werden, während Online- oder Live-Sitzungen, Seminaren oder per E-Mail an den Nutzer versandt werden, "Inhalte") zur Verfügung gestellt werden. Die Begriffe "Sie" und "Nutzer" werden im gesamten Text verwendet und beziehen sich auf alle natürlichen und/oder juristischen Personen, die auf die Akademie und alle ihre Websites zugreifen, egal zu welchem Zweck oder aus welchen Gründen.

              Bitte lesen Sie diese Bedingungen sorgfältig durch, da jede Nutzung des Inhalts diesen AGB unterliegt. Indem Sie den Inhalt nutzen, bestätigen Sie, dass Sie diese gelesen haben und damit einverstanden sind. Wenn Sie mit unseren Bedingungen nicht einverstanden sind, sollten Sie von der weiteren Nutzung des Inhalts Abstand nehmen. Darüber hinaus bedeutet Ihre fortgesetzte Nutzung des Inhalts nach der Veröffentlichung von Aktualisierungen oder Änderungen unserer Bedingungen, dass Sie mit diesen Änderungen einverstanden sind und diese akzeptieren.
<br/><br/>
Durch die Nutzung von Websites oder Inhalten der Akademie erklären Sie sich mit diesen AGB einverstanden..
<br/><br/>
Sie müssen außerdem mindestens achtzehn Jahre alt sein, um die Inhalte ohne Aufsicht eines Erziehungsberechtigten zu nutzen. Wenn Sie unter 18 Jahre alt sind, dürfen Sie die Inhalte nicht ohne die Aufsicht eines Erziehungsberechtigten nutzen oder Produkte oder Dienstleistungen von der Dienstleistung erwerben.
<br/><br/>
Wir behalten uns das Recht vor, diese AGB von Zeit zu Zeit ganz oder teilweise zu ergänzen oder zu ändern. Solche Ergänzungen oder Änderungen werden an dieser Stelle veröffentlicht und stellen die neuen Bedingungen für die Dienstleistung ab dem Zeitpunkt ihrer Veröffentlichung dar.
<br/><br/>
Weder die Dienstleistung noch der Inhalt stellen ein Angebot, eine Empfehlung oder eine Aufforderung zum Verkauf von Finanzinstrumenten oder Wertpapieren dar und enthalten keine professionelle, investitionsbezogene, rechtliche, steuerliche oder sonstige Beratung.
<br/><br/>
TDie Akademie und der Inhalt sind ausschließlich für den nicht-kommerziellen, persönlichen Gebrauch bestimmt. Die zulässige Nutzung der Inhalte umfasst alle Nutzungen, die normalerweise mit Inhalten dieser Art für eine solche nicht-kommerzielle, persönliche Nutzung verbunden sind. Der Inhalt kann zum Beispiel Videos oder Beiträge enthalten - Sie dürfen diese ansehen und abspielen, aber nicht herunterladen, kopieren oder verändern, sofern dies nicht ausdrücklich erlaubt ist.<br/><br/>

Sie dürfen nur einen Standard-Webbrowser verwenden, um auf den Inhalt zuzugreifen. Jede andere Software für den Zugriff auf den Inhalt verstößt gegen die vorliegenden AGB. Daher dürfen Sie keine automatisierten Geräte, Software-Tools, Harvester, Extraktoren, Scraper, Spider, Roboter, Programme, Codes, Skripte, Algorithmen oder Methoden oder ähnliche oder gleichwertige manuelle Verfahren einsetzen, um auf den Inhalt oder Teile davon zuzugreifen, ihn zu erwerben oder zu kopieren. Sie sind nicht berechtigt, den Inhalt oder Teile davon in irgendeiner Weise zu reproduzieren.<br/><br/>

Sie verpflichten sich auch, keinen verwirrend ähnlichen Domain-Namen zu verwenden und kein Eigentum oder Kontrolle über den Inhalt zu beanspruchen oder zu suggerieren, noch eine nicht existierende Verbindung mit der Akademie, der alvin oder dem Inhalt zu implizieren oder zu suggerieren.<br/><br/>

Sie dürfen auch nicht versuchen, sich auf irgendeine Weise unbefugten Zugang zu den Inhalten zu verschaffen, z.B. durch Hacken, Erraten von Passwörtern, Backdoors, Code-Injektion oder andere Mittel. Sie erklären sich auch damit einverstanden, dass Sie sich nicht an Aktivitäten beteiligen, die gegen geltende Gesetze oder Vorschriften in Ihrer lokalen Gerichtsbarkeit verstoßen.<br/><br/>

Wenn Sie Kommentare oder Fragen posten, erklären Sie sich damit einverstanden, diese Möglichkeiten nicht für Spamming, Verlinkungen zu anderer Software, Produkten oder Dienstleistungen Dritter oder Angriffe auf andere Nutzer zu nutzen. Sie verpflichten sich auch, keine Kommentare zu veröffentlichen, die als missbräuchlich, beleidigend, diskriminierend, irreführend, rassistisch, sexistisch, religiös oder politisch voreingenommen angesehen werden können oder die strafrechtlich verfolgt werden können. Sie nehmen zur Kenntnis und erklären sich damit einverstanden, dass eine solche verbotene Nutzung zum Verlust des Zugriffs auf den Inhalt ohne Vorwarnung oder Erstattung führen kann.
<br/><br/>
Die Akademie stellt die Inhalte so zur Verfügung, wie sie auf ihren Webseiten dargestellt sind oder wie sie Ihnen auf anderen digitalen Wegen oder in Live-Sitzungen zu den jeweiligen Zeitpunkten zur Verfügung gestellt werden. Die Dienstleistungen werden von der Akademie sorgfältig und gewissenhaft unter Anwendung ihres gesamten aktuellen Wissens und ihrer Erfahrung erbracht. Die Akademie kann jederzeit nach eigenem Ermessen und ohne vorherige Ankündigung Inhalte ändern, entfernen oder archivieren.
<br/><br/>
Von Zeit zu Zeit kann die Akademie den Zugang zur Akademie für Aktualisierungen, Wartungsarbeiten (geplant oder ungeplant), Erweiterungen, Upgrades, Verbesserungen oder Korrekturen oder zur Aufrechterhaltung oder Verbesserung der Sicherheit aussetzen und/oder verweigern. Es kann sein, dass die Akademie oder die Dienstleistungen aus Gründen, die außerhalb der Kontrolle der Akademie liegen, nicht immer verfügbar sind. Die Akademie kann jederzeit und ohne vorherige Ankündigung eine Schulung oder Live-Sitzung verschieben und/oder absagen. Eine solche vorübergehende Aussetzung, Verzögerung, Verschiebung oder Neuplanung von Inhalten wie Live-Sitzungen oder Online-Kursen liegt im Ermessen der Akademie und führt nicht zu einer Rückerstattung der vom Nutzer bereits gezahlten Gebühren.
 
<br/><br/>
Bei Zahlungsverzug werden Verzugszinsen und Bearbeitungsgebühren berechnet. Die Nichtzahlung gilt nicht als Rücktritt vom Vertrag oder Abmeldung.<br/><br/>

Abmeldung & Kündigung
Der Nutzer beendet diese Bedingungen durch Abmeldung von der Akademie im Wege der Löschung seines Accounts. Meldet sich der Nutzer von der Akademie ab, bleiben noch nicht bezahlte Entgelte geschuldet und bereits gezahlte Entgelte werden nicht zurückerstattet. Mit der Abmeldung erlischt automatisch und unverzüglich das Recht zur Nutzung der Inhalte. Die Akademie haftet Ihnen gegenüber in keiner Weise für eine Aussetzung oder Beendigung. Alle Bestimmungen der AGB, die ihrer Natur nach die Beendigung der Dienstleistungen überdauern sollten, tun dies, einschließlich der Abschnitte 6 bis 16.
<br/><br/>

Die Akademie behält sich das Recht vor, einen Nutzer von der Akademie abzumelden oder andere geeignete Maßnahmen zu ergreifen, wenn ein triftiger Grund vorliegt, wie z.B. Nichtzahlung der Gebühren, Verletzung von Ziffer 6 (Urheberrecht/Geheimhaltung und Nutzungsrecht). In diesen Fällen (i) ist der Nutzer verpflichtet, alle von der Akademie erworbenen oder von der Akademie zur Verfügung gestellten Informationen zu löschen, (ii) die Nutzung der von der Akademie erworbenen oder von der Akademie zur Verfügung gestellten Informationen unverzüglich zu unterlassen und (iii) die noch ausstehenden Entgelte zu zahlen, d.h. es erfolgt weder eine anteilige Rückerstattung noch ein Verzicht auf das Entgelt. Ziffer 6 (Schadenersatz) bleibt vorbehalten.<br/><br/>

Urheberrecht / Vertraulichkeit und Nutzungsrecht
Der gesamte Inhalt ist durch Urheber-, Marken- und andere Rechte geschützt und ist Eigentum der Akademie oder ihrer Inhaltslieferanten. Die Akademie behält sich das ausschließliche Recht an der Zusammenstellung der Inhalte vor. Der Nutzer ist nicht berechtigt, (1) Urheberrechtsvermerke, Warenzeichen oder sonstige Vorbehalte oder Eigentumsrechte an den Inhalten zu verwenden, zu verändern oder zu entfernen oder (2) eine Domain mit einem ähnlichen Namen wie die Marken der Akademie zu registrieren, zu betreiben oder zu leasen.

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