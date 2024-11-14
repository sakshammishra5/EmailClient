// Function to update fetched emails based on local storage
export const updateFetchedEmails = (fetchedEmails) => {
    // Get local emails from local storage
    const localEmails = JSON.parse(localStorage.getItem('persistentMail')) || [];
    // Map through the fetched emails and update them if they exist in local storage
    const updatedEmails = fetchedEmails.map(fetchedEmail => {
      // Find the corresponding local email by email ID
      const localEmail = localEmails.find(localEmail => localEmail.id === fetchedEmail.id);
       
      // If a matching local email is found, return the updated object
      if (localEmail) {
        return {
          ...fetchedEmail,
          isFavourite: localEmail.isFavourite,
          isRead: localEmail.isRead,
        };
      }
  
      // If no match is found, return the fetched email as is
      return fetchedEmail;
    });
  
    return updatedEmails;
  };