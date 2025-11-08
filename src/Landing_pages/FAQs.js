import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQs() {
  return (
    <div className="container mt-5 mb-5">
      <h2
        className="text-center mb-4"
        style={{ color: "#cf2b2b", fontWeight: "bold" }}
      >
        Frequently Asked Questions
      </h2>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cf2b2b" }} />}>
          <Typography sx={{ fontWeight: "bold" }}>
            What is LifeConnect?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            LifeConnect is a platform that connects blood donors and recipients
            to make the blood donation process faster, easier, and more
            reliable.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cf2b2b" }} />}>
          <Typography sx={{ fontWeight: "bold" }}>
            How can I become a blood donor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can register on LifeConnect and later choose to become a donor
            from your dashboard. Once available, your profile will be visible to
            those in need.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cf2b2b" }} />}>
          <Typography sx={{ fontWeight: "bold" }}>
            Is my personal information safe on LifeConnect?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely. Your data is securely stored and shared only with
            verified recipients or hospitals. We prioritize privacy and data
            protection.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cf2b2b" }} />}>
          <Typography sx={{ fontWeight: "bold" }}>
            Can I request blood for someone else?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can request blood for family or friends by providing their
            details, hospital name, and required blood group.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#cf2b2b" }} />}>
          <Typography sx={{ fontWeight: "bold" }}>
            How quickly can I find a donor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As soon as your request is posted, nearby donors are notified
            immediately. The response time depends on donor availability in your
            area.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
