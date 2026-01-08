/*
  # Create booking inquiries table

  1. New Tables
    - `booking_inquiries`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `phone` (text) - Contact phone number
      - `appliance_type` (text) - Type of appliance needing repair
      - `issue_description` (text) - Description of the issue
      - `created_at` (timestamptz) - When the inquiry was submitted
      - `status` (text) - Inquiry status (pending, contacted, completed)
  
  2. Security
    - Enable RLS on `booking_inquiries` table
    - Add policy for anonymous users to insert inquiries (public form submission)
    - Add policy for authenticated users to view all inquiries (admin access)
*/

CREATE TABLE IF NOT EXISTS booking_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  appliance_type text NOT NULL,
  issue_description text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit booking inquiries"
  ON booking_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON booking_inquiries
  FOR SELECT
  TO authenticated
  USING (true);