import { useForm } from "react-hook-form";
import { fetchPostersData } from "../PostersSupa/SupabaseController"; // Import the fetchPostersData function
import { createClient } from "@supabase/supabase-js";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Fetch data from Supabase using the fetchPostersData function

      // Log the fetched data

      // Send the form data to Supabase or handle it as needed
      const supabaseUrl = "https://amqdbfnmrgjfasacuigk.supabase.co";
      const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
      const client = createClient(supabaseUrl, supabaseKey);
      const { user, error } = await client.auth.signUp({
        email: data.email,
        password: data.password,
      });
      if (error) {
        console.error("Error signing up:", error.message);
      } else {
        console.log("Sign up successful:", user);
      }
    } catch (error) {
      console.error("Error fetching posters:", error);
    }
  };

  return (
    <section className="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" defaultValue="1" {...register("org_id")} />
        <input
          type="hidden"
          defaultValue="1234"
          {...register("refresh_token")}
        />
        <input type="hidden" defaultValue="1" {...register("groups")} />
        <div>
          <label htmlFor="text">Firstname</label>
          <input type="text" {...register("firstname", { required: true })} />
        </div>
        <div>
          <label htmlFor="text">Lastname</label>
          <input type="text" {...register("lastname", { required: true })} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </section>
  );
};
