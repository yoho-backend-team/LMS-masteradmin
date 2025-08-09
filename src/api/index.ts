/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "./httpclient";
import { API_END_POINTS } from "./endpoints";


class Client {
    auth = {
        verify_otp: (data: any) => httpClient.post(API_END_POINTS.auth.verify_otp, data),
        resend_otp: (data: any) => httpClient.post(API_END_POINTS.auth.resend_otp, data),
        validate_otp: (data: any) => httpClient.post(API_END_POINTS.auth.validate_otp, data),
        forget_password: (data: any) => httpClient.post(API_END_POINTS.auth.forget_password, data),
        update_password: (data: any) => httpClient.post(API_END_POINTS.auth.update_password, data),
        get_profile: (data: any) => httpClient.get(API_END_POINTS.auth.get_profile, data),
        get_activity: (data: any) => httpClient.get(API_END_POINTS.auth.get_activity, data),
        edit_profile: (data: any) => httpClient.patch(API_END_POINTS.auth.edit_profile, data)
    }
    institute = {
        all: (params: any) => httpClient.get(API_END_POINTS.institute.getAll, params),
        getWithId: (params: { id: string; }) => httpClient.get(API_END_POINTS.institute.get + params.id),
        create: (data: any, params: any) => httpClient.post(API_END_POINTS.institute.create, data, params),
        getCourseList: (data: { institute_id: string; }, params: any) => httpClient.get(API_END_POINTS.institute.get + data.institute_id + "/courses", params),
        getCourseWithUserDetails: (data: { courseId: string; }, params: any) => httpClient.get(API_END_POINTS.institute.courseWithUserDeatils + data.courseId, params)
    }
    branch = {
        get_all: (params: { institute: any; }) => httpClient.get(`/api/institutes/${params.institute}/branches/institute/all`)
    }
    subscription = {
        all: (params: any) => httpClient.get(API_END_POINTS.subscription.all, params),
        create: (data: any) => httpClient.post(API_END_POINTS.subscription.create, data),
        get_all: (data: any) => httpClient.get(API_END_POINTS.subscription.get_all, data),
        getWidId: (params: { institute: string; }) => httpClient.get(API_END_POINTS.subscription.getWithId + params?.institute),
        approve: (data: any) => httpClient.post(API_END_POINTS.subscription.approve, data),
    }
    notification = {
        create: (data: any) => httpClient.post(API_END_POINTS.notification.create, data),
        get_all: (params: any) => httpClient.get(API_END_POINTS.notification.get_all, params),
        resend: (querys: any) => httpClient.get(API_END_POINTS.notification.resend, querys)
    }
    payments = {
        get_all: (params: any) => httpClient.get(API_END_POINTS.payments.getAll, params),
        getWidId: (params: { institute: string; }) => httpClient.get(API_END_POINTS.payments.getWithId + params?.institute),
        create: (data: any) => httpClient.post(API_END_POINTS.payments.create, data),
        approve: (data: any) => httpClient.post(API_END_POINTS.payments.approve, data),
    }
    file = {
        upload: (data: any) => httpClient.uploadFile(API_END_POINTS.fileUpload, data),
        uploads: (data: any) => httpClient.uploadFile(API_END_POINTS.fileUploads, data)
    }
    faq_category = {
        get: (querys: any) => httpClient.get(API_END_POINTS.faq_category.all, querys),
        create: (data: any) => httpClient.post(API_END_POINTS.faq_category.create, data),
        update: (data: { uuid: string; }) => httpClient.patch(API_END_POINTS.faq_category.create + data.uuid, data),
        statusupdate: (data: { uuid: string,}) => httpClient.patch(API_END_POINTS.faq_category.create + data.uuid, data),
        delete: (data: { uuid: string; }) => httpClient.delete(API_END_POINTS.faq_category.create + data.uuid)
    }
    faq = {
        get: (data: any) => httpClient.get(API_END_POINTS.faq, data),
        create: (data: any) => httpClient.post(API_END_POINTS.faq, data),
        update: (data: { id: string; }) => httpClient.patch(API_END_POINTS.faq + data.id, data),
        delete: (data: { id: string; }) => httpClient.delete(API_END_POINTS.faq + data.id)
    }
    help_center = {
        ticket: {
            get_all: (params: any) => httpClient.get(API_END_POINTS.help_center.ticket.get_all, params)
        }
    }
    activity = {
        get: (params: any) => httpClient.get(API_END_POINTS.activity.get, params)
    }
    report = {
        get: (params: any) => httpClient.get(API_END_POINTS.auth.reports, params)
    }
}

export default new Client()