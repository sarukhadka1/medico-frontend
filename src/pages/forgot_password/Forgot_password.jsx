import React, { useState } from 'react';
import { forgotPasswordApi, verifyOtpApi } from '../../apis/Api';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';

const ForgotPassword = () => {
    const [phone, setPhone] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault();
        forgotPasswordApi({ phone }).then((res) => {
            if (res.status === 200) {
                toast.success(res.data.message);
                setIsSent(true);
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message || 'Error occurred');
        });
    };

    const handleVerifyOtp = (e) => {
        e.preventDefault();
        const data = { phone, otp, newPassword };
        verifyOtpApi(data).then((res) => {
            if (res.status === 200) {
                toast.success(res.data.message);
            }
        }).catch((error) => {
            toast.error(error.response?.data?.message || 'Error occurred');
        });
    };

    return (
        <div className="forgot-password-container bg-blue-50 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-2xl font-bold text-center mb-4 text-blue-700">Forgot Password - Medico</h3>
                <form>
                    <div className="mb-4">
                        <span className="flex items-center">
                            <h4 className="mr-2 text-blue-600 font-bold">+977</h4>
                            <input
                                disabled={isSent}
                                onChange={(e) => setPhone(e.target.value)}
                                type="number"
                                className="form-control"
                                placeholder="Enter valid phone number"
                            />
                        </span>
                    </div>
                    <button
                        disabled={isSent}
                        onClick={handleSendOtp}
                        className="btn btn-primary w-full mb-4"
                        style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                    >
                        Send OTP
                    </button>

                    {isSent && (
                        <>
                            <hr className="my-4" />
                            <p className="text-center text-blue-600">OTP has been sent to {phone} ✅</p>
                            <div className="mb-4">
                                <input
                                    onChange={(e) => setOtp(e.target.value)}
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter valid OTP"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    type="password"
                                    className="form-control"
                                    placeholder="Set new password"
                                />
                            </div>
                            <button
                                onClick={handleVerifyOtp}
                                className="btn btn-primary w-full"
                                style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
                            >
                                Verify OTP and Set Password
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
