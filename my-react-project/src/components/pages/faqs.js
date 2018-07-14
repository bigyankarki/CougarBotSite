import React, { Component } from 'react';

class Faqs extends Component {
  render() {
    return (
      <section className="container faqs bg-primary text-justify" id="faqs">
        <h2 className="text-center">Frequently Asked Questions</h2>

        <br />
        <h3>Do I have to sign in using website to use the chatbot?</h3>
        <p>No. Sign in is only necessary when you want to use the bot for homework feature. And, the sign in is done via facebook login. So, all you need is a facebook account.
        </p>

        <br />
        <h3>How to get started with homework feature?</h3>
        <p>Use facebook login to sign in. Then you will be asked to provide course name, end time of each class, and the days you have the class.
        Fill in the descriptions and submit. That is all you have to do from your side! After that, our bot will send notification asking for homework after each class.
        Then, follow the instructions. After completing the instructions, your homework will be saved in our database, and you will be notified of your homework in your desired time and date.
        </p>

        <br />
        <h3>Do you have to be worried about your data?</h3>
        <p>We understand that you are afraid to use facebook and provide your data to us. However, the data we collect are all public information provided by the facebook. And, we do not share
        those data with anyone except to those parties which is absolutly necessary to run this application. Please refer to privacy policy for further informations. </p>
      </section>
    );
  }
}

export default Faqs;
