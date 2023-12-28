import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Vouchers = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>What are Jumia vouchers?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Jumia vouchers are codes that provide customers with exclusive
            discounts on their purchases made on the Jumia website.
            Additionally, these codes can be issued as a form of refund for
            canceled or returned orders made through specific payment methods.
            With Jumia vouchers, customers can maximize their savings and have a
            seamless shopping experience.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>How can I use Jumia Vouchers?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To use your Jumia voucher, follow these simple steps:
            <li>
              <b>Step 1:</b> Log into your Jumia account.
            </li>
            <li>
              <b>Step 2:</b> Go to the "Account" section in the top right menu.
            </li>
            <li>
              <b>Step 3:</b> Select{" "}
              <b style={{ color: "orange" }}>"VOUCHERS"</b> to view all vouchers
              linked to your account. You may also have received a voucher code{" "}
              <b>via email or social media.</b>
            </li>
            <li>
              <b>Step 4:</b> Copy the voucher code you want to use.
            </li>
            <li>
              {" "}
              <b>Step 5:</b> During checkout: after you have confirmed your
              delivery details , please paste your code in the "Enter code here"
              field under the "Order Summary" section and click "Apply".
            </li>
            <li>
              <b>Step 6:</b> Your order total will be updated with the voucher's
              discount value, and you can proceed with your order by clicking
              "Confirm".
            </li>{" "}
            <br /> It's that easy! With Jumia vouchers, you can enjoy extra
            savings on your purchases.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Can I use multiple vouchers at once?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {" "}
            Unfortunately, you cannot use multiple vouchers at once. You can
            only use one voucher per order. We suggest you choose the best
            voucher for your purchase and make the most of the discount it
            offers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>How do I know if my voucher is still valid? </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can check the voucher's status in your Jumia account, under the{" "}
            <b style={{ color: "orange" }}> "VOUCHERS" </b>
            section. If the voucher has expired or has already been redeemed, it
            will not be listed there. In addition, reactivation of the voucher
            code <b> may not be possible.</b>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Can I use a voucher for all products on Jumia?</b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Some vouchers may have restrictions, such as being only valid for
            specific products or categories. The terms and conditions of the
            voucher will indicate any such restrictions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>Why is my voucher code not working? </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you're facing an
            error while trying to apply a voucher code on Jumia, here are some
            common reasons why voucher codes might not work and how to resolve
            them: <br />
            <li><b>Incorrect code:</b> Please double-check that the code you entered
            is correct and free of spaces or special characters.</li>
            <li><b>Account
            specific:</b> Voucher codes are linked to your Jumia account and cannot
            be used by another account. If the code was received from someone
            else, it won't work for you.</li>  
            <li><b>Already redeemed:</b> Each voucher code can
            only be used once. If you have already redeemed the code, it will no
            longer be valid.</li> 
            <li><b>Expired:</b> Voucher codes have a limited validity
            period. If the code has expired, it won't work.</li>
            <li><b>Maximum redemptions
            reached:</b> Some voucher codes have a maximum number of redemptions. If
            the maximum has been reached, the code won't work.</li> 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <b>
              Do I need to meet a minimum order value to use my voucher code?
            </b>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The conditions for using voucher codes, including any minimum order
            values, may vary. For more information on the specific conditions
            for your voucher, please visit the{" "}
            <b style={{ color: "orange" }}>VOUCHERS"</b> section in your
            account.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Vouchers;
