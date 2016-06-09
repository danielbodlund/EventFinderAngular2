export interface Event {
  name: string,
  date: string,
  timeStart: string,
  timeEnd: string,
  description: string,
  place: string
}
export interface FullEvent {
  name: string,
  start_date: string,
  end_date: string,
  start_time: string,
  end_time: string,
  description: string,
  adress: string, 
  comments: [string],
  price: string,
  organizer: string,
  phone: string,
  email: string,
  uid: string,
  imageURL: string
}
export interface CarouselEvent {
  name: string,
  imageURL: string
  date: string
}
  
  
  