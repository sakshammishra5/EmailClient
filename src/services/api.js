export const fetchEmailList = async (currentPage) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh`)
    if (!response.ok) throw new Error('failed to fetch the emails')
    const data = await response.json();
    return data.list;
}


export const fetchEmailBody = async (emailId) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${emailId}`);
    if (!response.ok) throw new Error('Failed to fetch email body');
    const data = await response.json();
    return data;
};