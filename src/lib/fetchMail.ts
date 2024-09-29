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

    return { attempt: Boolean(response.ok) }
  } catch (error) {
    let errorMessage = 'Unknown error occurred'

    if (error instanceof Error) {
      errorMessage = error.message
    }

    return { attempt: false, message: errorMessage }
  }
}
