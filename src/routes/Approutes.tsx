import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../components/Auth/AuthContext';

import SendOtp from '@/components/Auth/SendOtp';
import AddSubscription from '../pages/subscription/AddSubscription';
import SubscriptionView from '../pages/subscription/SubscriptionView';
import SubscriptionEdit from '../pages/subscription/SubscriptionEdit';
import DashBoard from '../pages/dashboard/DashBoard';
import Institute from '../pages/institute/Institute';
import Payments from '../pages/payments/Payments';
import Subscription from '../pages/subscription/Subscription';
import Notifications from '../pages/notifications/Notifications';
import Faq from '../pages/FaqManagement/Faq';
import MainLayout from '../layout/MainLayout';
import HelpcenterFaq from '../pages/helpcenter/HelpcenterFaq';
import HelpcenterTickets from '../pages/helpcenter/HelpcenterTickets';
import Categories from '../pages/FaqManagement/Categories';
import Profile from '../pages/profile/Profile';
import OtpVerification from '../pages/signin/OtpVerification';
import SignIn from '../pages/signin/SignIn';
import StepperForm from '@/components/institute/AddInstitute';
import UniversityDashboard from '@/components/institute/ViewInstituteDetails';
import ForgotPassword from '@/pages/signin/ForgotPassword';
import SubscriptionForm from '@/pages/subscription/SubscriptionForm';
import ViewPlan from '@/pages/subscription/ViewPlan';
import EditSubscription from '@/pages/subscription/EditSubscription';
import AddNotificationForm from '@/pages/notifications/AddNotificationForm';
import EditDetail from '@/pages/profile/EditDetail';

function Approutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // you could add a loader here

  return (
<Routes>
  {/* Public routes */}
  <Route path="/" element={<SignIn />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/otp-verification" element={<OtpVerification />} />

  {/* Protected routes */}
  <Route path="/" element={<MainLayout />}>
    <Route path="dashboard" element={<DashBoard />} />  {/* default after login */}
    <Route path="institute" element={<Institute />} />
    <Route path="payments" element={<Payments />} />
    <Route path="subscriptions" element={<Subscription />} />
    <Route path="add-institute" element={<SubscriptionForm />} />
    <Route path="view/:planName" element={<ViewPlan />} />
    <Route path="edit-subscription" element={<EditSubscription />} />
    <Route path="notifications" element={<Notifications />} />
    <Route path="add-notificationform" element={<AddNotificationForm />} />
    <Route path="profile" element={<Profile />} />
    <Route path="edit-detail" element={<EditDetail />} />
    <Route path="helpcenter/faq" element={<HelpcenterFaq />} />
    <Route path="helpcenter/tickets" element={<HelpcenterTickets />} />
    <Route path="faq/faqs" element={<Faq />} />
    <Route path="faq/categories" element={<Categories />} />
  </Route>
</Routes>
  );
}

export default Approutes;
