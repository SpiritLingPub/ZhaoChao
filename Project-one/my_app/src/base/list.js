const insertsql={
    firstname:localStorage.getItem('firstname'),
    lastname:localStorage.getItem('lastname'),
    country:localStorage.getItem('country'),
    username:localStorage.getItem('username'),
    judge:localStorage.getItem('judge'),
    send_me:localStorage.getItem('send_me'),
    agree_service:localStorage.getItem('agree_service'),
    main_services:localStorage.getItem('main_services').replace(/\&/g,"%26"),
    main_services_type:localStorage.getItem('main_services_type').replace(/\&/g,"%26"),
    offer_clients:localStorage.getItem('offer_clients').replace(/\&/g,"%26"),
    experience_level:localStorage.getItem('experience_level'),
    professional_title:localStorage.getItem('professional_title').replace(/\&/g,"%26"),
    professional:localStorage.getItem('professional').replace(/\&/g,"%26"),
    english_proficiency:localStorage.getItem('english_proficiency'),
    hourly_rate:localStorage.getItem('hourly_rate'),
    hours_week:localStorage.getItem('hours_week'),
    months_long:localStorage.getItem('months_long'),
    address_one:localStorage.getItem('address_one'),
    address_two:localStorage.getItem('address_two'),
    city:localStorage.getItem('city'),
    postal_code:localStorage.getItem('postal_code'),
    phone_number:localStorage.getItem('phone_number'),
    imgurl:localStorage.getItem('imgurl'),
    job_success:90,
    earn:0,
}

export function list(){
    return insertsql;
}