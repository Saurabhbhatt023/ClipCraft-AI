import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // ✅ Add this import

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
    credits: v.number(),
  }),
});
