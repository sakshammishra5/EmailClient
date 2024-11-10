export const fetchEmailList = async () => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?page=${1}`)
    if (!response.ok) throw new Error('failed to fetch the emails')
    const data = await response.json();
    return data.list;
}


export const fetchEmailBody = async (emailId) => {
    const response = await fetch(`https://flipkart-email-mock.now.sh/?id=${emailId}`);
    if (!response.ok) throw new Error('Failed to fetch email body');
    const data = await response.json();
    console.log(data)
    return data.body;
};