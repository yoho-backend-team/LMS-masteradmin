import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/dashboard/DashBoard'
import Institute from '../pages/institute/Institute'
import Payments from '../pages/payments/Payments'
import Subscription from '../pages/subscription/Subscription'
import Notifications from '../pages/notifications/Notifications'
import HelpCenter from '../pages/helpcenter/HelpcenterTickets'
import Faq from '../pages/FaqManagement/Faq'
import MainLayout from '../layout/MainLayout'
import Settings from '../pages/settings/Settings'
import HelpcenterFaq from '../pages/helpcenter/HelpcenterFaq'
import HelpcenterTickets from '../pages/helpcenter/HelpcenterTickets'
import Categories from '../pages/FaqManagement/Categories'
import Profile from '../pages/profile/Profile'
import SubscriptionForm from '../pages/subscription/SubscriptionForm'
import AddNotificationForm from '../pages/notifications/AddNotificationForm'
import EditDetail from '../pages/profile/EditDetail'
import ViewPlan from '../pages/subscription/ViewPlan'
import EditSubscription from '../pages/subscription/EditSubscription'
import OtpVerification from '../pages/signin/OtpVerification'
import ForgotPassword from '../pages/signin/ForgotPassword'
import SignIn from '../pages/signin/SignIn'

function Approutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />

        <Route path="/" element={<MainLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
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
    </>
  )
}

export default Approutes