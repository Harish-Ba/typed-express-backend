export interface Policy {
  id: string; // Unique identifier for the policy
  productId: string; // References Product.id
  customerName: string; // Name of the customer
  startDate: string; // ISO date string for policy start
  endDate: string; // ISO date string for policy end
  premium: number; // Premium amount for the policy
  status: 'active' | 'expired' | 'cancelled'; // Status of the policy
  createdAt: string; // ISO date string for policy creation
}