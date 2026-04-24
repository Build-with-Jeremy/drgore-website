export interface Testimonial {
  name: string;
  quote: string;
  context?: string;
}

export const testimonials: Testimonial[] = [
  // Add real quotes here as Dave collects them.
  // First-name or pseudonym only — no full names (ethics).
  // Optional context: "Parent of a teen client", "Individual therapy", etc.
];

export const hasTestimonials = testimonials.length > 0;
