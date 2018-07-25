import React, { Component } from 'react';

class Privacy extends Component {
  render() {
    return (
      <section className="privacy bg-primary text-justify container" id="privacy">

      <h2 className="text-center">Privacy Policy of the CougarBot</h2>
      <p className="text-center">Effective date: July 09, 2018</p>
      <p>In order to receive information about your Personal Data, the purposes and the parties the Data is shared with, contact the Owner.</p>

      <br />
      <div>
        <h3>Data Controller and Owner</h3>
        <p>120 Bloomfield Ave, Caldwell, NJ 07006, USA <br/> bkarki@caldwell.edu</p>
      </div>

      <br />
      <div>
        <h3>Types of Data collected</h3>

        <ul>
        <li>Full Name</li>
        <li>Email Address</li>
        <li>Facebook user ID number</li>
        <li>Timezone</li>
        </ul>

        <p>We do not collect data of your personal messages to friends, friends list, financial transactions, or any other important and personal information.</p>
        <p>The Personal Data may be freely provided by the User, or collected automatically when using this Application.</p>
        <p>Any use of Cookies by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.</p>
        <p>Failure to provide certain Personal Data may make it impossible for this Application to provide its services.</p>
        <p>Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third partys consent to provide the Data to the Owner.</p>
      </div>

      <br />
      <div>
        <h3>Mode and place of processing the Data</h3>
        <h4>Methods of processing</h4>
        <p>The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.</p>
        <p>The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.</p>

        <h4>Place</h4>
        <p>The Data is processed at the Data Controllers operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.</p>
        <h4>Retention time</h4>
        <p>The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.</p>
      </div>

      <br />
      <div>
        <h3>The use of the collected Data</h3>
        <p>The Personal Data is used only for core functioning of this application. All of the collected data are public data shared by the Facebook.</p>
      </div>

      <br />
      <div>
        <h3>Facebook permissions asked by this Application</h3>
        <p>This Application may ask for some Facebook permissions allowing it to perform actions with the Users Facebook account and to retrieve information, including Personal Data, from it.</p>
        <p>For more information about the following permissions, refer to the <a href="https://developers.facebook.com/docs/authentication/permissions/" target="_blank" rel="noopener noreferrer">Facebook permissions documentation</a> and to the <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer">Facebook privacy policy</a>.</p>
        <p>The permissions asked are the following:</p>
        <h4>Basic information</h4>
        <p>By default, this includes certain User&rsquo;s Data such as id, name, picture, gender, and their locale. Certain connections of the User, such as the Friends, are also available. If the User has made more of their Data public, more information will be available.</p>
      </div>

      <br />
      <div>
        <h3>Additional information about Data collection and processing</h3>
        <h4>Legal action</h4>
        <p>The Users Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.<br />The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.
        </p>

        <h4>Additional information about Users Personal Data</h4>
        <p>
          In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.
         </p>
        <h4>System logs and maintenance</h4>
         <p>
            For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address).
          </p>

          <h4>Information not contained in this policy</h4>
          <p>
            More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.
          </p>

          <h4>The rights of Users</h4>
          <p>
             Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.
          </p>
          <p>
            This Application does not support “Do Not Track” requests.<br />To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies.
          </p>

          <h4>Changes to this privacy policy</h4>
          <p>
            The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification above. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.
          </p>
        </div>

      </section>
    );
  }
}

export default Privacy;
