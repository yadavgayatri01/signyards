// formFields.js

export const formFields = [
  {
    heading: "Order Details",
    fields: [
      { name: "date", label: "Date", defaultValue: "14 Sep" },
      { name: "orderID", label: "Order ID", defaultValue: "AY001" },
      {
        name: "city",
        label: "City",
        defaultValue: "Gurgaon",
        type: "select",
        options: ["Gurgaon", "Other"],
      },
      {
        name: "approvedWork",
        label: "Approved Work",
        defaultValue: "",
        type: "textarea",
      },
      {
        name: "executionManager",
        label: "Assigned Execution Manager",
        defaultValue: "Akram",
      },
      {
        name: "contactNo",
        label: "Contact No.",
        defaultValue: "EM 8851219494",
      },
    ],
  },
  {
    heading: "Payment Details",
    fields: [
      {
        name: "approvedQuotation",
        label: "Approved Quotation",
        defaultValue: "",
        type: "file",
      },
      {
        name: "quotationAmount",
        label: "Quotation Amount (incl. GST)",
        defaultValue: "80000/-",
      },
    ],
  },
  {
    heading: "Customer Details",
    fields: [
      {
        name: "customerName",
        label: "Customer Name",
        defaultValue: "Anuj Saini",
      },
      {
        name: "emailID",
        label: "Email ID",
        defaultValue: "anuj.kumar1230@gmail.com",
      },
      {
        name: "customerContactNo",
        label: "Contact No.",
        defaultValue: "8851219494",
      },
      {
        name: "whatsappNo",
        label: "Whatsapp Number",
        defaultValue: "8851219494",
      },
      { name: "customerID", label: "Customer ID", defaultValue: "ANUJ9494" },
      { name: "city", label: "City", defaultValue: "" },
      {
        name: "businessNickName",
        label: "Business Nick Name",
        defaultValue: "",
      },
      { name: "businessName", label: "Business Name", defaultValue: "" },
      { name: "businessAddress", label: "Business Address", defaultValue: "" },
      { name: "gstNumber", label: "GST Number (if Any)", defaultValue: "" },
      {
        name: "installationAddress",
        label: "Installation Address",
        defaultValue: "",
      },
    ],
  },
  {
    heading: "Franchisor Details",
    fields: [
      {
        name: "franchisorApprovedQuotation",
        label: "Approved Quotation",
        defaultValue: "",
        type: "file",
      },
      {
        name: "franchisorQuotationAmount",
        label: "Quotation Amount (incl. GST)",
        defaultValue: "80000/-",
      },
      {
        name: "authorisedFranchisor",
        label: "Authorised Franchisor",
        defaultValue: "",
      },
      { name: "franchisorPOC", label: "Franchisor POC", defaultValue: "" },
      {
        name: "franchisorEmails",
        label: "Franchisor Email Ids",
        defaultValue: "",
      },
    ],
  },
];
