"use client";
import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  IconButton,
  styled,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const INDUSTRY_TYPES = ["Healthcare", "Legal", "Finance", "Education", "Government", "Logistics", "E-commerce", "Other"];
const EMPLOYEE_RANGES = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-500", label: "201–500" },
  { value: "500+", label: "500+" }
];
const HOW_HEARD_OPTIONS = ["LinkedIn", "Email", "HR Conclave", "Google/Search", "Referred", "Other"];

// Styled components for beautiful design
const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

const StyledModalBox = styled(Box)({
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  border: 'none',
  borderRadius: '24px',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.8)',
  padding: '32px',
  maxWidth: '750px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #00C4B4, #00BFA5, #26D0CE)',
    borderRadius: '24px 24px 0 0',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0, 196, 180, 0.1)',
      border: '2px solid rgba(0, 196, 180, 0.3)',
    },
    '&.Mui-focused': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0, 196, 180, 0.2)',
      border: '2px solid #00C4B4',
    },
    '& fieldset': {
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
    },
    '&:hover fieldset': {
      border: '2px solid transparent',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid transparent',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '500',
    transform: 'translate(16px, 16px) scale(1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&.Mui-focused': {
      color: '#00C4B4',
      transform: 'translate(16px, -9px) scale(0.85)',
      backgroundColor: '#ffffff',
      padding: '0 8px',
      borderRadius: '8px',
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(16px, -9px) scale(0.85)',
      backgroundColor: '#ffffff',
      padding: '0 8px',
      borderRadius: '8px',
    },
  },
  '& .MuiInputBase-input': {
    color: '#1e293b',
    fontSize: '15px',
    fontWeight: '500',
    padding: '16px',
  },
  '& .MuiFormHelperText-root': {
    marginLeft: '16px',
    marginTop: '6px',
    fontSize: '12px',
    fontWeight: '500',
  },
});

const StyledFormControl = styled(FormControl)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '16px',
    backgroundColor: '#ffffff',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid transparent',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0, 196, 180, 0.1)',
      border: '2px solid rgba(0, 196, 180, 0.3)',
    },
    '&.Mui-focused': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(0, 196, 180, 0.2)',
      border: '2px solid #00C4B4',
    },
    '& fieldset': {
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
    },
    '&:hover fieldset': {
      border: '2px solid transparent',
    },
    '&.Mui-focused fieldset': {
      border: '2px solid transparent',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '500',
    transform: 'translate(16px, 16px) scale(1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&.Mui-focused': {
      color: '#00C4B4',
      transform: 'translate(16px, -9px) scale(0.85)',
      backgroundColor: '#ffffff',
      padding: '0 8px',
      borderRadius: '8px',
    },
    '&.MuiInputLabel-shrink': {
      transform: 'translate(16px, -9px) scale(0.85)',
      backgroundColor: '#ffffff',
      padding: '0 8px',
      borderRadius: '8px',
    },
  },
  '& .MuiSelect-select': {
    color: '#1e293b',
    fontSize: '15px',
    fontWeight: '500',
    padding: '16px',
  },
});

const StyledButton = styled(Button)({
  borderRadius: '16px',
  padding: '16px 32px',
  fontSize: '16px',
  fontWeight: '600',
  textTransform: 'none',
  background: 'linear-gradient(135deg, #00C4B4 0%, #00BFA5 50%, #26D0CE 100%)',
  boxShadow: '0 10px 30px rgba(0, 196, 180, 0.3)',
  border: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'linear-gradient(135deg, #00BFA5 0%, #00C4B4 50%, #1CC7C5 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 15px 40px rgba(0, 196, 180, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '&:disabled': {
    background: 'linear-gradient(135deg, #94a3b8 0%, #cbd5e1 100%)',
    color: '#64748b',
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none',
  },
});

const StyledCheckbox = styled(Checkbox)({
  color: '#cbd5e1',
  borderRadius: '8px',
  '&.Mui-checked': {
    color: '#00C4B4',
  },
  '&:hover': {
    backgroundColor: 'rgba(0, 196, 180, 0.1)',
  },
});

const StyledCloseButton = styled(IconButton)({
  position: 'absolute',
  top: '24px',
  right: '24px',
  color: '#64748b',
  backgroundColor: '#f1f5f9',
  borderRadius: '12px',
  width: '44px',
  height: '44px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: '#e2e8f0',
    transform: 'scale(1.1)',
    color: '#475569',
  },
});

const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    phoneNumber: "",
    companyName: "",
    jobTitle: "",
    industryType: "",
    OtherIndustry: "",
    numberOfEmployees: "",
    howHeard: "",
    consent: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        fullName: "",
        workEmail: "",
        phoneNumber: "",
        companyName: "",
        jobTitle: "",
        industryType: "",
        OtherIndustry: "",
        numberOfEmployees: "",
        howHeard: "",
        consent: false,
      });
      setErrors({});
      setShowThankYou(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou, onClose]);

  const validateForm = () => {
    const newErrors = {};
    
    // Full name validation
    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    if (!formData.workEmail) {
      newErrors.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    // Company name validation
    if (!formData.companyName) {
      newErrors.companyName = "Company name is required";
    } else if (formData.companyName.trim().length < 2) {
      newErrors.companyName = "Company name must be at least 2 characters";
    }

    // Job title validation
    if (!formData.jobTitle) {
      newErrors.jobTitle = "Job title is required";
    } else if (formData.jobTitle.trim().length < 2) {
      newErrors.jobTitle = "Job title must be at least 2 characters";
    }

    // Industry validation
    if (!formData.industryType) {
      newErrors.industryType = "Industry type is required";
    }

    // Other industry validation
    if (formData.industryType === "Other" && !formData.OtherIndustry) {
      newErrors.OtherIndustry = "Please specify your industry";
    } else if (formData.industryType === "Other" && formData.OtherIndustry.trim().length < 2) {
      newErrors.OtherIndustry = "Industry specification must be at least 2 characters";
    }

    // Number of employees validation
    if (!formData.numberOfEmployees) {
      newErrors.numberOfEmployees = "Number of employees is required";
    }

    // How heard validation
    if (!formData.howHeard) {
      newErrors.howHeard = "This field is required";
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = "You must agree to be contacted";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    
    // Only allow digits
    const digitsOnly = value.replace(/[^0-9]/g, '');
    
    // Limit to 10 digits
    const limitedDigits = digitsOnly.slice(0, 10);
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      phoneNumber: limitedDigits
    }));

    // Clear phone error when user starts typing
    if (errors.phoneNumber) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Show toast for validation errors
      toast.error("Please fix the errors in the form", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      setShowThankYou(true);
      setErrors({});
    } catch (error) {
      toast.error("Failed to book demo. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="book-demo-modal"
      aria-describedby="book-demo-form"
    >
      <StyledModalBox>
        {showThankYou ? (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Box
              sx={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00C4B4, #26D0CE)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.05)' },
                  '100%': { transform: 'scale(1)' },
                },
              }}
            >
              <CheckCircleIcon sx={{ fontSize: 40, color: '#ffffff' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: '700', mb: 2, color: '#1e293b' }}>
              Thank You!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: '#64748b', fontSize: '16px' }}>
              Demo Booked Successfully!
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '14px' }}>
              This popup will close automatically in 3 seconds
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <StyledCloseButton onClick={onClose}>
              <CloseIcon />
            </StyledCloseButton>
            
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Typography variant="h4" sx={{ 
                fontWeight: '700', 
                color: '#1e293b',
                mb: 2,
                background: 'linear-gradient(135deg, #00C4B4, #26D0CE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Book a Demo
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b', fontSize: '16px' }}>
                Let's schedule a personalized demo for your team
              </Typography>
            </Box>

            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
              gap: 3,
              mb: 4 
            }}>
              <StyledTextField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                required
                size="small"
                inputProps={{
                  maxLength: 50,
                  pattern: "[A-Za-z ]+",
                  title: "Please enter only letters and spaces"
                }}
              />
              
              <StyledTextField
                label="Work Email"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                error={!!errors.workEmail}
                helperText={errors.workEmail}
                required
                size="small"
                inputProps={{
                  maxLength: 100
                }}
              />
              
              <StyledTextField
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                error={!!errors.companyName}
                helperText={errors.companyName}
                required
                size="small"
                inputProps={{
                  maxLength: 100
                }}
              />
              
              <StyledTextField
                label="Job Title"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
                required
                size="small"
                inputProps={{
                  maxLength: 50
                }}
              />
              
              <StyledTextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber || `${formData.phoneNumber.length}/10 digits`}
                required
                size="small"
                inputProps={{
                  maxLength: 10,
                  pattern: "[0-9]{10}",
                  title: "Please enter exactly 10 digits"
                }}
                placeholder="1234567890"
              />
              
              <StyledFormControl fullWidth error={!!errors.industryType} size="small">
                <InputLabel>Industry Type</InputLabel>
                <Select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                  required
                >
                  {INDUSTRY_TYPES.map((industry) => (
                    <MenuItem key={industry} value={industry}>{industry}</MenuItem>
                  ))}
                </Select>
                {errors.industryType && <Typography color="error" variant="caption" sx={{ ml: 2, mt: 0.5 }}>{errors.industryType}</Typography>}
              </StyledFormControl>
              
              {formData.industryType === "Other" && (
                <StyledTextField
                  label="Specify Industry"
                  name="OtherIndustry"
                  value={formData.OtherIndustry}
                  onChange={handleChange}
                  error={!!errors.OtherIndustry}
                  helperText={errors.OtherIndustry}
                  required
                  size="small"
                  sx={{ gridColumn: { xs: '1', sm: 'span 2' } }}
                  inputProps={{
                    maxLength: 50
                  }}
                />
              )}
              
              <StyledFormControl fullWidth error={!!errors.numberOfEmployees} size="small">
                <InputLabel>Number of Employees</InputLabel>
                <Select
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  required
                >
                  {EMPLOYEE_RANGES.map((range) => (
                    <MenuItem key={range.value} value={range.value}>{range.label}</MenuItem>
                  ))}
                </Select>
                {errors.numberOfEmployees && <Typography color="error" variant="caption" sx={{ ml: 2, mt: 0.5 }}>{errors.numberOfEmployees}</Typography>}
              </StyledFormControl>
              
              <StyledFormControl fullWidth error={!!errors.howHeard} size="small">
                <InputLabel>How Did You Hear About Us?</InputLabel>
                <Select
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  required
                >
                  {HOW_HEARD_OPTIONS.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
                {errors.howHeard && <Typography color="error" variant="caption" sx={{ ml: 2, mt: 0.5 }}>{errors.howHeard}</Typography>}
              </StyledFormControl>
            </Box>

            <Box sx={{ mb: 4 }}>
              <FormControlLabel
                control={
                  <StyledCheckbox
                    checked={formData.consent}
                    onChange={handleChange}
                    name="consent"
                  />
                }
                label={
                  <Typography sx={{ color: '#64748b', fontSize: '14px', fontWeight: '500' }}>
                    I agree to be contacted by RecruitExe for demo and updates
                  </Typography>
                }
              />
              {errors.consent && <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4, mt: 0.5 }}>{errors.consent}</Typography>}
            </Box>

            <StyledButton
              type="submit"
              variant="contained"
              disabled={isLoading}
              fullWidth
              size="large"
            >
              {isLoading ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <CircularProgress size={20} color="inherit" />
                  Booking Demo...
                </Box>
              ) : (
                'Book Demo'
              )}
            </StyledButton>
          </Box>
        )}
        <ToastContainer />
      </StyledModalBox>
    </StyledModal>
  );
};

export default BookDemoModal;