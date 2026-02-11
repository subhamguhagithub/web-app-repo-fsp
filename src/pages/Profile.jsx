import React from 'react';
import Products from './Products';

function Profile() {
  return (
    <div>
      <Products 
        title="Product 1"
        price="Rs.3000"
        image="https://wallpapers.com/images/featured/demon-slayer-pictures-tsbyd3y88kxirm15.jpg"
      />

      <Products 
        title="Products 2"
        price="Rs.5000"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXGBgXGRgYFxoYHRoXGBgXGBgdFxUYHSggHholHRgYITIhJSorLi4uHR8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtKy0tLS0tLS0tLSstLS0tLy0tLS0tLS0tLy0tLS0rLS0tKy0tLS0tLS0tLS0uLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA8EAACAQIEAwYDBgUEAwEBAAABAhEAAwQSITEFQVEGEyJhcYEykaEHFEKxwdEjUmLh8BVygpIzovFjJP/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EADERAAICAQMDAQYEBwEAAAAAAAABAhEDEiExBEFRIhNhcZGh0RQywfBCQ1KBkrHxBf/aAAwDAQACEQMRAD8A..."
      />
    </div>
  );
}

export default Profile;
