import { Accordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Payments = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>What payment methods are accepted on Jumia?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accepts a variety of payment methods including:
            <li>
              <b>Pay on Delivery</b> allows for payment in cash, or with
              credit/debit card, bank transfer, or Mastercard upon delivery.
            </li>
            <li>
              <b>JumiaPay</b> accepts payment through Mastercard, Visa Verve,
              cards, bank transfers, or card payments.
            </li>
            <li>
              <b>Vouchers</b> allow you to pay using a voucher code
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>How secure is my payment information on Jumia?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jumia prioritizes customer payment security with encryption, and
            secure servers. Regular monitoring and auditing are also performed
            to maintain a secure environment for transactions.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel3a-header"
        >
          <Typography>
            <b>What do I do if my payment is declined?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If your payment is declined, you can check the following to resolve
            the issue:
            <li>
              Check the <b>spelling and billing information</b> you entered for
              accuracy.
            </li>
            <li>
              Ensure that your credit card has <b>sufficient funds</b> or that
              your bank account has enough balance.
            </li>
            <li>
              Check if there are any <b>restrictions on your card</b>, such as a
              daily spending limit.
            </li>
            <li>
              Make sure your card has <b>not expired</b>.{" "}
            </li>
            <br />
            If you&apos;ve checked the above and your payment is still declined,
            you can contact Jumia customer service for assistance via our
            livechat. <br />
            <br />
            <b>Note</b>: It is recommended to keep the details of the error
            message that appears during the declined transaction to provide to
            Jumia customer service for a faster resolution.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel4a-header"
        >
          <Typography>
            <b>Can I pay cash on delivery for my orders?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can pay for your orders in cash upon delivery on Jumia. You
            can choose to pay in cash or opt for other payment options such as a
            credit/debit card, bank transfer, or Mastercard payment - all
            without the need to enter payment information beforehand.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel5a-header"
        >
          <Typography>
            <b>
              What should I do if I have been charged twice for the same order?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have been charged twice for the same order, you can contact
            Jumia customer service for assistance in resolving the issue. They
            can be reached through the Live Chat. Please provide the following
            information to Jumia customer service when reporting a double
            charge:
            <li>Your name and email address used to place the order.</li>
            <li>Order number and date of purchase.</li>
            <li>
              Details of the double charge (amount, date, and transaction
              number).
            </li>{" "}
            <br />
            Jumia customer service will assist you in resolving the issue and
            arranging for a refund if applicable.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel6a-header"
        >
          <Typography>
            <b>How do I know if my payment has been processed successfully?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can check the status of your payment by following these steps:{" "}
            <br />
            <br />
            <li>
              <b>Step 1:</b> Go to the "ORDERS" section in your account
              dashboard.
            </li>
            <li>
              <b>Step 2:</b> Find the order in question and check its status. If
              the payment has been processed successfully, the order status
              should be "Confirmed." You will also receive a confirmation email
              from Jumia after a successful payment.
            </li>{" "}
            <br />
            If you do not receive a confirmation email, or if you have any
            concerns about your payment, you can contact Jumia customer service
            via our livechat.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel7a-header"
        >
          <Typography>
            <b>What is Jumia Store Credit?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            And How can I use it? You can get Jumia Store Credit as a refund if
            your refund to the original payment method used for the purchase
            fails. You can use this store credit to pay for your orders on
            Jumia, Jumia Food, and JumiaPay, subject to certain conditions. To
            see your available store credit, go to your Jumia account and click
            on the "ACCOUNT" tab, or log in to JumiaPay to check your balance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel8a-header"
        >
          <Typography>
            <b>What is JumiaPay on delivery?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            JumiaPay on delivery is a cashless payment option that allows you to
            pay for your Jumia orders upon delivery. You can pay with your
            credit/debit card, bank transfer, or Mastercard. <br />
            To pay with JumiaPay on delivery, simply ask our delivery associate
            to use JumiaPay as a payment method. Then, you can select your
            preferred payment method within JumiaPay.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel9a-header"
        >
          <Typography>
            <b>
              Can I cancel my order and get a refund after payment has been
              made?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If the order hasn't been shipped yet,{" "}
            <b>you can cancel your order and get a refund.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>How long does it take for my payment to be processed?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Most payments on Jumia are processed immediately when completed.
            However, specific processing times may vary depending on the payment
            method. <br /> <br />
            To ensure that your payment is processed quickly, we recommend that
            you double-check all the information before completing the checkout.
            If you are experiencing an issue with your payment, please contact
            our customer service team for further assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>
              How do I pay via bank transfer on delivery via JumiaPay on
              delivery?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you prefer to pay using a bank transfer, follow the steps below:{" "}
            <br />
            <li>
              Upon delivery, kindly request from our delivery associate that you
              would like to pay with a bank transfer via ''JumiaPay."
            </li>{" "}
            <li>
              The Delivery associate will generate a link that will be sent to
              you via SMS on your registered phone number.
            </li>{" "}
            <li>
              Click on the link, and it will redirect you to the JumiaPay app
              page with the bank account details.{" "}
            </li>{" "}
            <li>
              Kindly ensure you transfer the <b>EXACT AMOUNT </b>
              to the JumiaPay account provided.{" "}
            </li>{" "}
            <li>
              Confirm that your payment was successful. A unique or different
              bank account is provided for each transaction; do not keep the
              account information for future usage.
            </li>{" "}
            <br />
            <b>Please note:</b> Do not share your card details or CVV with the
            delivery associate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>
              How do I pay with my card on delivery via JumiaPay on delivery?{" "}
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you prefer to pay using card, follow the steps below: <br />
            <br />
            <li>
              The Delivery associate will send a JumiaPay payment link to your
              registered phone number on the order, or better still, you can
              scan the QR code to get the payment link.
            </li>{" "}
            <li>
              Click on the link, provide your card details to pay or simply log
              into your account to pay with your card stored on JumiaPay.
            </li>{" "}
            <li>
              Confirm that your payment was successful. That is it! You’re done
            </li>{" "}
            . <br /> Please note: Do not share your card details or CVV with the
            delivery associate.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            <b>How do I pay via USSD on delivery via JumiaPay on delivery?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you prefer to pay via USSD, kindly follow the steps below: <br />
            <li>
              Upon delivery, kindly request from our delivery associate that you
              would like to pay via ''JumiaPay."
            </li>
            <li>
              The Delivery associate will generate a link that will be sent to
              you via SMS on your registered phone number.
            </li>
            <li>
              Click on the link, and it will redirect you to the JumiaPay app
              page with the bank account details.
            </li>
            <li>
              Kindly ensure you pay the EXACT AMOUNT to the JumiaPay account
              provided using your bank's USSD code.
            </li>
            <li>Confirm that your payment was successful.</li>
            For further inquiry/feedback write to us at{" "}
            <b style={{ color: "orange" }}>jumiapay.feedback.ng@jumia.com. </b>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Payments;
