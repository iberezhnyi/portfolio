import { IContactFormDataDto } from '@/interfaces/interfaces'

export const fetchMail = async (
  formData: IContactFormDataDto,
): Promise<{ attempt: boolean; message?: unknown }> => {
  try {
    const response = await fetch('/api/mail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    console.log('response :>> ', response)

    return { attempt: Boolean(response.ok) }
  } catch (error: unknown) {
    let errorMessage = 'Unknown error occurred'

    if (error instanceof Error) {
      errorMessage = error.message
    }

    console.log('Something went wrong:', errorMessage)

    return { attempt: false, message: errorMessage }
  }
}
