import { useState, type SyntheticEvent, useTransition } from "react"

const Signup = () => {

  const [error, setError] = useState<string>('')
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const confirmPassword = e.target[3].value

    startTransition(async () => {
      try {
        const res = await fetch('/api/signup', {
          method: "POST",
          headers: {
            "Accept": "application/json, text/plain",
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ name, email, password, confirmPassword })
        })

        const data = await res.json();

        if (data.message) {
          setMessage(data.message)
        }

        if (data.error) {
          setError(data.error)
        }

        if (data.failed) {
          setError(data.failed.join(''))
        }
      } catch (error) {
        console.log(error)
        setError('Connection error. Try again')
      }
    })

  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-lg border border-mist-600  p-8"
      >
        <h1 className="mb-6 text-2xl font-medium text-whitesmoke">Sign up</h1>

        <div className="min-h-6">
          <div className="text-[#ee0505]">{error}</div>
          <div className="text-[#01bb29]">{message}</div>
        </div>


        <input
          type="text"
          name="name"
          id="login-name"
          placeholder="Name"
          required
          disabled={isPending}
          className="w-full rounded border-2 border-mist-600  p-3 pt-2 pb-2 text-whitesmoke placeholder:text-mist-400 outline-none focus:border-white"
        />

        <input
          type="email"
          name="email"
          id="login-email"
          placeholder="Email"
          required
          disabled={isPending}
          className="w-full rounded border-2 border-mist-600  p-3 pt-2 pb-2 text-whitesmoke placeholder:text-mist-400 outline-none focus:border-white"
        />

        <input
          type="password"
          name="password"
          id="login-password"
          placeholder="Password"
          required
          disabled={isPending}
          className="w-full rounded border-2 border-mist-600  p-3 pt-2 pb-2 text-whitesmoke placeholder:text-mist-400 outline-none focus:border-white"
        />

        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="Confirm password"
          required
          disabled={isPending}
          className="w-full rounded border-2 border-mist-600  p-3 pt-2 pb-2 text-whitesmoke placeholder:text-mist-400 outline-none focus:border-white"
        />

        <input
          type="submit"
          value="Sign up"
          disabled={isPending}
          className="w-full cursor-pointer rounded border-2 border-white bg-white p-3 pt-2 pb-2 font-medium text-black transition-colors hover:bg-mist-200"
        />
      </form>
    </div>
  )
}

export default Signup
