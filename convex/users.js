import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    name: v.optional(v.string()),
    email: v.string(),
    pictureURL: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .unique();
    
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return existingUser._id;
    }
    
    // Create new user with required credits field
    const userId = await ctx.db.insert("users", {
      name: args.name || "",
      email: args.email,
      pictureURL: args.pictureURL || "",
      credits: 100, // Add default credits value
      createdAt: new Date().toISOString()
    });
    
    console.log("New user created with ID:", userId);
    return userId;
  }
});

export const getUser = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .unique();
  }
});