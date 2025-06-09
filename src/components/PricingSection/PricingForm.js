import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Autocomplete,
  Stack,
  useTheme,
  Link,
} from "@mui/material";

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

function PricingForm({ onClose, planName, planPrice }) {
  const theme = useTheme();

  // Form state
  const [formData, setFormData] = useState({
    billingAddressLine1: "",
    billingAddressLine2: "",
    pincode: "",
    city: "",
    state: "",
    gstNumber: "",
    companyName: "",
    companyState: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});
  const [hasGST, setHasGST] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle state selection
  const handleStateChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      state: newValue || "",
    }));
  };

  // Handle company state selection
  const handleCompanyStateChange = (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      companyState: newValue || "",
    }));
  };

  // Validate GST Number (15 characters, e.g., 22AAAAA0000A1Z5)
  const validateGST = (gst) => {
    const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[0-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstRegex.test(gst);
  };

  // Validate Pincode (6 digits)
  const validatePincode = (pincode) => {
    const pincodeRegex = /^[0-9]{6}$/;
    return pincodeRegex.test(pincode);
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.billingAddressLine1) {
      newErrors.billingAddressLine1 = "Billing Address Line 1 is required";
    }
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!validatePincode(formData.pincode)) {
      newErrors.pincode = "Pincode must be a 6-digit number";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (hasGST) {
      if (!formData.gstNumber) {
        newErrors.gstNumber = "GST Number is required";
      } else if (!validateGST(formData.gstNumber)) {
        newErrors.gstNumber = "Invalid GST Number (e.g., 22AAAAA0000A1Z5)";
      }
      if (!formData.companyName) {
        newErrors.companyName = "Company Name is required";
      }
      if (!formData.companyState) {
        newErrors.companyState = "Company State is required";
      }
    }

    if (!agreePolicy) {
      newErrors.agreePolicy = "You must agree to the policies";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (validateForm()) {
      const submissionData = {
        fullName: "abc",
        emailAddress: "abc@gmail.com",
        contactNumber: "N/A",
        billingAddressLine1: formData.billingAddressLine1,
        billingAddressLine2: formData.billingAddressLine2,
        pincode: formData.pincode,
        city: formData.city,
        state: formData.state,
        ...(hasGST && {
          gstNumber: formData.gstNumber,
          companyName: formData.companyName,
          companyState: formData.companyState,
        }),
        plan: planName,
        price: `₹${planPrice} (Including GST)`,
        credits: 100,
      };
      console.log("Form submitted successfully:", submissionData);
      alert("Form submitted successfully! Check the console for details.");
      onClose();
    } else {
      console.log("Validation failed:", errors);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        maxWidth: { xs: "100%", sm: 700, md: 900, lg: 1000 },
        // mx: "auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.background.paper,
          zIndex: 2,
          // borderBottom: `1px solid ${theme.palette.divider}`,
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 1.5, sm: 2 },
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          textAlign="center"
          color="primary"
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
          }}
        >
          Payment Checkout – {planName} Pack
        </Typography>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 2, sm: 3 },
        }}
      >
        {/* PLAN DETAILS */}
        <Box
          sx={{
            p: { xs: 2, sm: 3 },
            mb: { xs: 2, sm: 2.5 },
            borderRadius: 1,
            bgcolor: theme.palette.mode === "light" ? "#f0faff" : "grey.900",
            border: `1px solid ${theme.palette.divider}`,
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight={600}
            mb={1}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Plan Details
          </Typography>

          <Stack spacing={{ xs: 1, sm: 1.5 }}>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Plan Selected:
              </Typography>
              <Typography
                fontWeight={400}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                {planName}
              </Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Price:
              </Typography>
              <Typography
                fontWeight={400}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                ₹{planPrice} (Including GST)
              </Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Credits:
              </Typography>
              <Typography
                fontWeight={400}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                100
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* BILLING DETAILS */}
        <Box mb={{ xs: 2, sm: 3, md: 4 }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            mb={{ xs: 0.5, sm: 1 }}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Billing Details
          </Typography>

          <Stack spacing={{ xs: 1, sm: 1.5 }}>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Full Name:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
                abc
              </Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Email Address:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
                abc@gmail.com
              </Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
              <Typography
                width={{ xs: "100%", sm: "40%" }}
                color="text.primary"
                fontWeight={500}
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                Contact Number:
              </Typography>
              <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
                N/A
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* ADDRESS */}
        <Stack spacing={{ xs: 1.5, sm: 2 }}>
          <TextField
            fullWidth
            label="Billing Address Line 1"
            size="small"
            name="billingAddressLine1"
            value={formData.billingAddressLine1}
            onChange={handleInputChange}
            error={!!errors.billingAddressLine1}
            helperText={errors.billingAddressLine1}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              },
              "& .MuiInputLabel-root": {
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Billing Address Line 2 (Optional)"
            size="small"
            name="billingAddressLine2"
            value={formData.billingAddressLine2}
            onChange={handleInputChange}
            sx={{
              "& .MuiInputBase-input": {
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              },
              "& .MuiInputLabel-root": {
                fontSize: { xs: "0.85rem", sm: "0.9rem" },
              },
            }}
          />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 2 }}
          >
            <TextField
              fullWidth
              label="Pincode"
              size="small"
              name="pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              error={!!errors.pincode}
              helperText={errors.pincode}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
              }}
            />
            <TextField
              fullWidth
              label="City"
              size="small"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              error={!!errors.city}
              helperText={errors.city}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
                "& .MuiInputLabel-root": {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
              }}
            />
          </Stack>

          <Autocomplete
            name="state"
            size="small"
            options={INDIAN_STATES}
            value={formData.state}
            onChange={handleStateChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="State"
                size="small"
                fullWidth
                error={!!errors.state}
                helperText={errors.state}
                sx={{
                  "& .MuiInputBase-input": {
                    fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "0.85rem", sm: "0.9rem" },
                  },
                }}
              />
            )}
            isOptionEqualToValue={(option, value) => option === value}
            sx={{ mt: { xs: 1.5, sm: 2 } }}
            disablePortal
            PopperProps={{
              placement: "bottom-start",
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [0, 6],
                  },
                },
              ],
              sx: {
                zIndex: 1300,
                "& .MuiAutocomplete-option": {
                  fontSize: { xs: "0.85rem", sm: "0.9rem" },
                },
              },
            }}
          />
        </Stack>

        {/* GST SECTION */}
        <Box mt={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={hasGST}
                onChange={(e) => setHasGST(e.target.checked)}
                color="primary"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  },
                }}
              />
            }
            label={
              <Typography sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}>
                I have a GST Number
              </Typography>
            }
          />

          {hasGST && (
            <Box
              sx={{
                mt: 1,
                p: { xs: 2, sm: 3 },
              }}
            >
              <Stack spacing={{ xs: 1.5, sm: 2 }}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1.5, sm: 2 }}
                >
                  <TextField
                    fullWidth
                    label="GST Number"
                    size="small"
                    name="gstNumber"
                    value={formData.gstNumber}
                    onChange={handleInputChange}
                    error={!!errors.gstNumber}
                    helperText={errors.gstNumber}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Company Name"
                    size="small"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    error={!!errors.companyName}
                    helperText={errors.companyName}
                    sx={{
                      "& .MuiInputBase-input": {
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      },
                    }}
                  />
                </Stack>
                <Autocomplete
                  fullWidth
                  size="small"
                  name="companyState"
                  options={INDIAN_STATES}
                  value={formData.companyState}
                  onChange={handleCompanyStateChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Company State"
                      error={!!errors.companyState}
                      helperText={errors.companyState}
                      sx={{
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.85rem", sm: "0.9rem" },
                        },
                      }}
                    />
                  )}
                  isOptionEqualToValue={(option, value) => option === value}
                  disablePortal
                  PopperProps={{
                    placement: "bottom-start",
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, 6],
                        },
                      },
                    ],
                    sx: {
                      zIndex: 1300,
                      "& .MuiAutocomplete-option": {
                        fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      },
                    },
                  }}
                />
              </Stack>
            </Box>
          )}
        </Box>

        {/* POLICIES */}
        <Box mt={2} mb={2}>
          <FormControlLabel
            control={
              <Checkbox
                checked={agreePolicy}
                onChange={(e) => setAgreePolicy(e.target.checked)}
                color="primary"
                sx={{
                  "& .MuiSvgIcon-root": {
                    fontSize: { xs: "1.1rem", sm: "1.25rem" },
                  },
                }}
              />
            }
            label={
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.85rem", sm: "0.9rem" } }}
              >
                I accept the{" "}
                <Link
                  href="#"
                  underline="always"
                  sx={{
                    fontWeight: 500,
                    color: "primary.main",
                    cursor: "pointer",
                  }}
                >
                  Policies
                </Link>{" "}
                and agree to make the payment.
              </Typography>
            }
          />
          {errors.agreePolicy && (
            <Typography
              variant="caption"
              color="error"
              sx={{ fontSize: { xs: "0.75rem", sm: "0.8rem" } }}
            >
              {errors.agreePolicy}
            </Typography>
          )}
        </Box>
      </Box>

      {/* Fixed Footer */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          backgroundColor: theme.palette.background.paper,
          zIndex: 2,
          px: { xs: 2, sm: 4, md: 5 },
          py: { xs: 1.5, sm: 2 },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          spacing={{ xs: 1, sm: 2 }}
        >
          <Button
            variant="outlined"
            onClick={onClose}
            fullWidth={{ xs: true, sm: false }}
            sx={{
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
              py: { xs: 0.75, sm: 0.5 },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            disabled={!agreePolicy}
            onClick={handleSubmit}
            fullWidth={{ xs: true, sm: false }}
            sx={{
              width: { xs: "100%", sm: "auto" },
              fontSize: { xs: "0.85rem", sm: "0.9rem" },
              py: { xs: 0.75, sm: 0.5 },
            }}
          >
            Check Out
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default PricingForm;