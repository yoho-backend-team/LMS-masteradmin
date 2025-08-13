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
      {/* Public Routes */}
      {!isAuthenticated && (
        <>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/send-otp" element={<SendOtp />} />
          <Route path="*" element={<Navigate to="/sign-in" />} />
        </>
      )}

      {/* Protected Routes */}
      {isAuthenticated && (
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="dashboard" element={<DashBoard />} />

          {/* Institute */}
          <Route path="institute">
            <Route index element={<Institute />} />
            <Route path="add" element={<StepperForm />} />
            <Route path="view/:id" element={<UniversityDashboard />} />
          </Route>

          {/* Payments */}
          <Route path="payments" element={<Payments />} />

          {/* Subscriptions */}
          <Route path="subscriptions" element={<Subscription />} />
          <Route path="add-subscription" element={<AddSubscription />} />
          <Route path="subscription-view" element={<SubscriptionView />} />
          <Route path="subscription-edit" element={<SubscriptionEdit />} />
          <Route path="add-institute" element={<SubscriptionForm />} />
          <Route path="view/:planName" element={<ViewPlan />} />
          <Route path="edit-subscription" element={<EditSubscription />} />

          {/* Notifications */}
          <Route path="notifications" element={<Notifications />} />
          <Route path="add-notificationform" element={<AddNotificationForm />} />

          {/* Profile */}
          <Route path="profile" element={<Profile />} />
          <Route path="edit-detail" element={<EditDetail />} />

          {/* Help Center */}
          <Route path="helpcenter">
            <Route path="faq" element={<HelpcenterFaq />} />
            <Route path="tickets" element={<HelpcenterTickets />} />
          </Route>

          {/* FAQ Management */}
          <Route path="faq">
            <Route path="faqs" element={<Faq />} />
            <Route path="categories" element={<Categories />} />
          </Route>

          {/* Fallback for protected routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      )}
    </Routes>
  );
}

export default Approutes;
