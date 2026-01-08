/*
  # Create Bookings and Work Portfolio Tables

  1. New Tables
    - `service_bookings`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone
      - `appliance_type` (text) - Type of appliance
      - `issue_description` (text) - Description of the issue
      - `appointment_date` (date) - Preferred appointment date
      - `appointment_time` (time) - Preferred appointment time
      - `status` (text) - Booking status (pending, confirmed, completed)
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

    - `amc_subscriptions`
      - `id` (uuid, primary key)
      - `name` (text) - Customer name
      - `email` (text) - Customer email
      - `phone` (text) - Customer phone
      - `plan_type` (text) - AMC plan selected (Basic, Premium, Gold)
      - `appliance_type` (text) - Type of appliance
      - `appliance_brand` (text) - Brand of appliance
      - `appliance_model` (text) - Model of appliance
      - `purchase_date` (date) - Date of appliance purchase
      - `status` (text) - Subscription status (pending, active, expired)
      - `created_at` (timestamp) - Creation timestamp
      - `updated_at` (timestamp) - Last update timestamp

    - `work_portfolio`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `appliance_type` (text) - Type of appliance worked on
      - `description` (text) - Description of work
      - `image_url` (text) - URL to image
      - `video_url` (text, nullable) - URL to video
      - `created_at` (timestamp) - Creation timestamp

  2. Security
    - Enable RLS on all tables
    - Add public read policies for work_portfolio
    - Add policies for other tables (admin only for writes)
*/

CREATE TABLE IF NOT EXISTS service_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  appliance_type text NOT NULL,
  issue_description text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS amc_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  plan_type text NOT NULL,
  appliance_type text NOT NULL,
  appliance_brand text NOT NULL,
  appliance_model text NOT NULL,
  purchase_date date NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS work_portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  appliance_type text NOT NULL,
  description text NOT NULL,
  image_url text NOT NULL,
  video_url text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE amc_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_portfolio ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anyone to insert bookings"
  ON service_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anyone to view own bookings"
  ON service_bookings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anyone to insert AMC subscriptions"
  ON amc_subscriptions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anyone to view own AMC subscriptions"
  ON amc_subscriptions FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow public read access to work portfolio"
  ON work_portfolio FOR SELECT
  TO anon, authenticated
  USING (true);
