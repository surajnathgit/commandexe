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
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
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
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.workEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) newErrors.workEmail = "Please enter a valid email address";
    if (!formData.companyName) newErrors.companyName = "Company name is required";
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!formData.industryType) newErrors.industryType = "Industry type is required";
    if (formData.industryType === "Other" && !formData.OtherIndustry) newErrors.OtherIndustry = "Please specify your industry";
    if (!formData.numberOfEmployees) newErrors.numberOfEmployees = "Number of employees is required";
    if (!formData.howHeard) newErrors.howHeard = "This field is required";
    if (!formData.consent) newErrors.consent = "You must agree to be contacted";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const payload = {
        fullName: formData.fullName.trim(),
        workEmail: formData.workEmail.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber.trim() || "",
        companyName: formData.companyName.trim(),
        jobTitle: formData.jobTitle.trim(),
        industryType: formData.industryType,
        numberOfEmployees: formData.numberOfEmployees,
        howDidYouHearAboutUs: formData.howHeard,
        consent: formData.consent,
        ...(formData.industryType === "Other" && { OtherIndustry: formData.OtherIndustry.trim() }),
      };

      const response = await axios.post(
        "https://api.recruitexe.com/v1/api/demo/createBookDemo",
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjY2ODUwZjdkMzc0NDI1ZTkzNzExNDE4MCIsInJvbGVOYW1lIjpbImFkbWluIl0sInJvbGVJZCI6IjY4MmQ3MjA1MjBmZTVmMzg4Y2I0MDFhNCIsIm9rZ2FuaXphdGlvbklkIjoiNjgzMDc4YWFmZjZhNmJlNTg1ZWI4YWVmIiwiaWF0IjoxNzUwOTM5OTczfQ.D7tq_G5h1VNQF0VtkZ_x1fVozLvDDHt6FDV5ZZ3GCgg'
          },
          timeout: 30000,
        }
      );

      if (response.data.status === true) {
        setShowThankYou(true);
        setErrors({});
      } else {
        toast.error(response.data.message || "Failed to book demo. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      if (error.code === 'ECONNABORTED') {
        toast.error("Request timeout. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      } else if (error.response?.data) {
        toast.error(error.response.data.message || "Failed to book demo. Please try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Network error. Please check your connection and try again.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="book-demo-modal"
      aria-describedby="book-demo-form"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        sx={{
          bgcolor: '#F5F5F5',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          p: 3,
          maxWidth: '700px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          color: '#333',
        }}
      >
        {showThankYou ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: 60, color: '#00C4B4', mb: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
              Thank You!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#555' }}>
              Demo Booked Successfully!
            </Typography>
            <Typography variant="body2" sx={{ color: '#777' }}>
              This popup will close automatically in 3 seconds
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                Book a Demo
              </Typography>
              <IconButton onClick={onClose} sx={{ color: '#555' }}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              <TextField
                label="Full Name *"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                size="small"
                sx={{
                  input: { color: '#333' },
                  label: { color: '#555' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: '#00C4B4' },
                    '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                  },
                }}
              />
              <TextField
                label="Work Email *"
                name="workEmail"
                type="email"
                value={formData.workEmail}
                onChange={handleChange}
                error={!!errors.workEmail}
                helperText={errors.workEmail}
                size="small"
                sx={{
                  input: { color: '#333' },
                  label: { color: '#555' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: '#00C4B4' },
                    '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                  },
                }}
              />
              <TextField
                label="Company Name *"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                error={!!errors.companyName}
                helperText={errors.companyName}
                size="small"
                sx={{
                  input: { color: '#333' },
                  label: { color: '#555' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: '#00C4B4' },
                    '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                  },
                }}
              />
              <TextField
                label="Job Title *"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                error={!!errors.jobTitle}
                helperText={errors.jobTitle}
                size="small"
                sx={{
                  input: { color: '#333' },
                  label: { color: '#555' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: '#00C4B4' },
                    '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                  },
                }}
              />
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                  handleChange(e);
                }}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
                size="small"
                sx={{
                  input: { color: '#333' },
                  label: { color: '#555' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover fieldset': { borderColor: '#00C4B4' },
                    '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                  },
                }}
              />
              <FormControl fullWidth error={!!errors.industryType} size="small">
                <InputLabel sx={{ color: '#555' }}>Industry Type *</InputLabel>
                <Select
                  name="industryType"
                  value={formData.industryType}
                  onChange={handleChange}
                  sx={{
                    color: '#333',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '.MuiSvgIcon-root': { color: '#555' },
                  }}
                >
                  {INDUSTRY_TYPES.map((industry) => (
                    <MenuItem key={industry} value={industry}>{industry}</MenuItem>
                  ))}
                </Select>
                {errors.industryType && <Typography color="error" variant="caption">{errors.industryType}</Typography>}
              </FormControl>
              {formData.industryType === "Other" && (
                <TextField
                  label="Specify Industry *"
                  name="OtherIndustry"
                  value={formData.OtherIndustry}
                  onChange={handleChange}
                  error={!!errors.OtherIndustry}
                  helperText={errors.OtherIndustry}
                  size="small"
                  sx={{
                    input: { color: '#333' },
                    label: { color: '#555' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                      '&:hover fieldset': { borderColor: '#00C4B4' },
                      '&.Mui-focused fieldset': { borderColor: '#00C4B4' },
                    },
                    gridColumn: 'span 2',
                  }}
                />
              )}
              <FormControl fullWidth error={!!errors.numberOfEmployees} size="small">
                <InputLabel sx={{ color: '#555' }}>Number of Employees *</InputLabel>
                <Select
                  name="numberOfEmployees"
                  value={formData.numberOfEmployees}
                  onChange={handleChange}
                  sx={{
                    color: '#333',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '.MuiSvgIcon-root': { color: '#555' },
                  }}
                >
                  {EMPLOYEE_RANGES.map((range) => (
                    <MenuItem key={range.value} value={range.value}>{range.label}</MenuItem>
                  ))}
                </Select>
                {errors.numberOfEmployees && <Typography color="error" variant="caption">{errors.numberOfEmployees}</Typography>}
              </FormControl>
              <FormControl fullWidth error={!!errors.howHeard} size="small">
                <InputLabel sx={{ color: '#555' }}>How Did You Hear About Us? *</InputLabel>
                <Select
                  name="howHeard"
                  value={formData.howHeard}
                  onChange={handleChange}
                  sx={{
                    color: '#333',
                    '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.2)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#00C4B4' },
                    '.MuiSvgIcon-root': { color: '#555' },
                  }}
                >
                  {HOW_HEARD_OPTIONS.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
                {errors.howHeard && <Typography color="error" variant="caption">{errors.howHeard}</Typography>}
              </FormControl>
            </Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formData.consent}
                  onChange={handleChange}
                  name="consent"
                  sx={{ color: '#555', '&.Mui-checked': { color: '#00C4B4' } }}
                />
              }
              label="I agree to be contacted by RecruitExe for demo and updates"
              sx={{ color: '#555' }}
            />
            {errors.consent && <Typography color="error" variant="caption">{errors.consent}</Typography>}
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading || Object.keys(validateForm()).length > 0}
              sx={{
                mt: 2,
                background: 'linear-gradient(90deg, #00C4B4, #00BFA5)',
                boxShadow: '0px 4px 14px rgba(0, 196, 180, 0.3)',
                '&:hover': { background: 'linear-gradient(90deg, #00BFA5, #00C4B4)' },
                '&:disabled': { background: 'rgba(0, 196, 180, 0.3)', cursor: 'not-allowed' },
              }}
            >
              {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Book Demo'}
            </Button>
          </Box>
        )}
        <ToastContainer />
      </Box>
    </Modal>
  );
};

export default BookDemoModal;