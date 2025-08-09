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
import AddSubscription from '../pages/subscription/AddSubscription'
import SubscriptionView from '../pages/subscription/SubscriptionView'
import SubscriptionEdit from '../pages/subscription/SubscriptionEdit'

function Approutes() {
  return (
    <>
    <Routes>
       <Route path='/' element={<MainLayout />}>
        <Route index element={<DashBoard/>} />
        <Route path='institute' element={<Institute/>}/>
        <Route path="payments" element={<Payments/>}/>
        <Route path='subscriptions' element={<Subscription/>}/>
        <Route path="/add-subscription" element={<AddSubscription />} />
        <Route path='/subscription-view' element={<SubscriptionView/>}/>
        <Route path='/subscription-Edit' element={<SubscriptionEdit/>}/>

        <Route path='notifications' element={<Notifications/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path='helpcenter'>
            <Route path='faq' element={<HelpcenterFaq/>}/>
            <Route path='tickets' element={<HelpcenterTickets/>}/>
        </Route>
        <Route path='faq'>
                <Route path='faqs' element={<Faq/>}/>
                <Route path='categories' element={<Categories/>}/>
        </Route>
        {/* <Route path='settings' element={<Settings/>}/> */}
        </Route>
    </Routes>
    </>
  )
}

export default Approutes