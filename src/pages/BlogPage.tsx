import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogs = [
    {
      id: 1,
      title: 'Summer AC Care: Keeping Cool Without Breaking the Bank',
      excerpt: 'Simple maintenance tips to keep your AC running efficiently during peak summer months.',
      image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '20 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'AC Care',
      keywords: 'AC repair, air conditioner maintenance, summer cooling, AC efficiency, gas refill',
      description: 'Expert guide on AC maintenance and repair to keep your air conditioner running efficiently in summer.',
      content: `Summer is here, and with it comes the challenge of keeping your home cool without sky-high electricity bills. Your air conditioner is working overtime, and proper maintenance is key to its longevity and efficiency.

## Why AC Maintenance Matters
Regular AC maintenance not only keeps your home comfortable but also extends the life of your air conditioning unit. A well-maintained AC system can reduce energy consumption by up to 20%, translating to significant savings on your electricity bills.

## Essential AC Care Tips
**1. Clean or Replace Filters Regularly**
Dirty filters force your AC to work harder, increasing energy consumption. Clean or replace filters every 30-45 days during peak usage. This simple step can improve your AC efficiency dramatically.

**2. Schedule Professional AC Service**
Professional air conditioner maintenance should be done at least twice a year - before summer and winter seasons. Our expert technicians can inspect your AC unit, identify potential issues, and perform necessary repairs.

**3. Keep the Outdoor Unit Clean**
The outdoor AC unit can accumulate debris like leaves and dirt. Ensure there's at least 2 feet of clearance around your outdoor unit for optimal AC performance.

**4. Check for Refrigerant Leaks**
Low refrigerant levels indicate leaks in your AC system. If your air conditioner isn't cooling properly, it may need AC gas refill and leak repairs. Our AC repair service includes comprehensive leak detection.

**5. Use a Programmable Thermostat**
A programmable thermostat helps maintain consistent temperature settings, reducing unnecessary AC cycling and energy waste.

## When to Call Professional AC Repair
Contact our AC repair service if you notice:
- Weak airflow from AC vents
- AC not cooling properly
- Unusual noises from the AC unit
- Water leaks around your air conditioner
- Higher than normal electricity bills

## Conclusion
Proper air conditioner maintenance is an investment in comfort and savings. Our experienced technicians are here to help with all your AC repair and maintenance needs. Schedule your AC service today to ensure peak performance throughout summer.`,
    },
    {
      id: 2,
      title: 'Why Is Your Refrigerator Making Strange Noises?',
      excerpt: 'Understanding the sounds your fridge makes and when you need professional help.',
      image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '18 Dec 2024',
      author: 'Amit Patel',
      category: 'Refrigerator',
      keywords: 'refrigerator repair, noisy fridge, compressor problems, refrigerator maintenance',
      description: 'Complete guide to understanding refrigerator noises and when you need professional refrigerator repair service.',
      content: `A noisy refrigerator can be alarming, but it doesn't always mean serious trouble. From the compressor humming to the ice maker clicking, many sounds are normal. However, some noises warrant professional attention.

## Normal Refrigerator Sounds
Your refrigerator makes various sounds as part of normal operation:
- **Humming**: The compressor running
- **Clicking**: The defrost timer engaging
- **Water flowing**: Ice maker filling or defrost water draining
- **Fan noise**: Circulation fans running

## Abnormal Refrigerator Sounds Requiring Repair

**Loud Buzzing or Vibrating**
If your refrigerator buzzes loudly, the compressor may be failing. This requires immediate refrigerator repair service to prevent complete breakdown.

**Knocking or Banging**
Strange knocking sounds often indicate issues with the compressor or refrigerant circulation. Professional refrigerator repair is recommended.

**Grinding Noise**
A grinding sound typically means the ice maker is malfunctioning. Our refrigerator repair technicians can fix or replace the ice maker.

**Squealing**
High-pitched squealing suggests a motor or fan bearing issue that needs professional attention.

## Common Refrigerator Problems

**Compressor Issues**
The compressor is the heart of your refrigerator. If it's not working properly, your refrigerator won't cool. Our refrigerator repair service includes compressor diagnosis and replacement.

**Refrigerant Leaks**
Low cooling efficiency may indicate refrigerant leaks. We provide comprehensive refrigerator repair including gas refill and leak sealing.

**Fan Motor Failure**
A faulty fan motor can prevent proper air circulation, causing uneven cooling throughout your refrigerator.

## When to Call a Professional
Don't ignore persistent unusual sounds from your refrigerator. Early intervention can prevent costly repairs. Contact our refrigerator repair specialists if you notice any abnormal noises.

## Prevention Tips
- Keep the refrigerator level to prevent unnecessary vibration
- Clean condenser coils every 3-6 months
- Ensure proper ventilation around your unit
- Schedule regular refrigerator maintenance

Regular maintenance and timely refrigerator repair can extend the life of your appliance and keep it running smoothly.`,
    },
    {
      id: 3,
      title: 'Water Purifier Maintenance: Ensuring Safe Drinking Water',
      excerpt: 'Complete guide to maintaining your water purifier for optimal performance.',
      image: 'https://images.pexels.com/photos/4238562/pexels-photo-4238562.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '15 Dec 2024',
      author: 'Sneha Verma',
      category: 'Water Purifier',
      keywords: 'water purifier maintenance, water filter replacement, water quality, water purification',
      description: 'Complete guide to water purifier maintenance, filter replacement, and ensuring safe drinking water quality.',
      content: `Your water purifier is your first line of defense against contaminants. Regular maintenance ensures it works efficiently and provides safe drinking water for your family.

## Why Water Purifier Maintenance is Essential
A water purifier filter can accumulate contaminants, bacteria, and sediment over time. Without proper water filter maintenance, your water purification system may not effectively remove impurities, compromising water quality.

## Water Filter Replacement Schedule
**Sediment Filter**: Every 3-6 months
**Carbon Filter**: Every 6-12 months
**RO Membrane**: Every 12-24 months

Regular water filter replacement ensures optimal water quality and water purification performance.

## Types of Water Purifier Filters

**Sediment Filter**
Removes dirt, sand, and suspended particles. A clogged sediment filter reduces water flow and water purification efficiency.

**Carbon Filter**
Eliminates chlorine, pesticides, and organic compounds. Regular water filter replacement of carbon filters improves taste and odor.

**RO Membrane**
The advanced water purification technology that removes dissolved salts and minerals. The RO membrane is crucial for water quality.

**UV Filter**
Kills bacteria and viruses, providing additional water purification protection.

## Water Purifier Maintenance Checklist

**Monthly Tasks**
- Check water TDS levels
- Inspect for water leaks
- Verify water flow rate

**Quarterly Tasks**
- Clean pre-filters
- Check water pressure
- Inspect connections

**Annual Tasks**
- Professional water purification system inspection
- Complete water purifier servicing
- Replace water filter membrane if needed

## Signs Your Water Purifier Needs Service
- Low water TDS levels or poor water quality
- Reduced water flow
- Water leaks from water purifier
- Foul taste or odor in water
- Strange noises from water purification unit

## Professional Water Purifier Maintenance
Our water purifier repair and maintenance service includes:
- Water quality testing
- Water filter replacement
- Water purification system cleaning
- Water purifier troubleshooting
- Complete water purifier servicing

## Protecting Your Family's Health
Investing in regular water purifier maintenance protects your family's health by ensuring safe drinking water. Don't wait for problems to arise. Schedule your professional water purifier service today.`,
    },
    {
      id: 4,
      title: 'LED TV Display Issues: Common Problems & Solutions',
      excerpt: 'Troubleshooting guide for common LED TV display problems.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '12 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'Television',
      keywords: 'TV repair, LED TV problems, display issues, television service, screen repair',
      description: 'Expert guide to fixing LED TV display problems, screen issues, and television repair solutions.',
      content: `Modern LED TVs are complex devices, but many display issues can be resolved with basic troubleshooting. From flickering screens to dead pixels, learn how to identify and fix common problems.

## Common LED TV Display Problems

**Screen Flickering**
Flickering TV screens are usually caused by loose cable connections or power supply issues. Try disconnecting and reconnecting all cables first. If flickering persists, the backlight or power supply may need TV repair.

**Dark Picture or Low Brightness**
A dim LED TV picture could indicate backlight failure. Our TV repair service includes LED backlight replacement and adjustment.

**Vertical or Horizontal Lines**
Lines on your TV screen suggest circuit board issues or display panel damage. Professional TV repair is recommended.

**Dead Pixels**
While one or two dead pixels are usually acceptable, excessive dead pixels require display replacement. Our television service includes professional assessment and TV screen repair.

**No Picture or Black Screen**
Complete loss of picture has multiple potential causes:
- HDMI connection problems
- Power supply failure
- Display panel issues
- Processor problems

## Quick LED TV Troubleshooting Steps

1. **Check Connections**: Ensure all cables are properly connected
2. **Restart Your TV**: Power cycle the TV by unplugging for 30 seconds
3. **Check Remote**: Replace batteries or try using buttons on the TV
4. **Update Firmware**: Some TV issues can be resolved with software updates
5. **Factory Reset**: As a last resort, perform a factory reset (this clears settings)

## When to Call for Professional TV Repair
- Display issues persist after troubleshooting
- Physical damage to the TV screen
- Power supply failure
- No image or sound output
- Persistent software issues

## LED TV Panel Types and Repair

**LED TVs** (Most Common)
Use LED backlight with LCD display. LED TV repair often involves backlight replacement.

**Smart TVs**
Include built-in processors and applications. Smart TV repair may include software updates or processor replacement.

## Prevention Tips
- Use surge protectors to prevent power damage
- Clean vents regularly for proper cooling
- Avoid excessive moisture
- Handle with care to prevent physical damage

## Professional Television Service
Our TV repair technicians are certified to handle all major LED TV brands. We provide complete television service including:
- LED TV troubleshooting
- Display panel replacement
- Power supply repair
- Software updates
- TV screen restoration

Don't struggle with TV display problems. Contact our professional television repair service today.`,
    },
    {
      id: 5,
      title: 'Washing Machine Water Leakage: Causes & Fixes',
      excerpt: 'A step-by-step guide to identifying and fixing water leakage issues.',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '10 Dec 2024',
      author: 'Amit Patel',
      category: 'Washing Machine',
      keywords: 'washing machine repair, water leakage, washing machine leak, drum repair, hose replacement',
      description: 'Complete guide to washing machine water leakage causes and professional washing machine repair solutions.',
      content: `Water leaking from your washing machine is more common than you think, and the causes vary widely. Before calling for repairs, understand what might be causing the leak and when DIY solutions work.

## Common Causes of Washing Machine Water Leakage

**Worn Inlet Valve**
The inlet valve controls water flow into the washing machine. A faulty inlet valve causes water to leak during the fill cycle. Washing machine repair includes valve replacement.

**Damaged Door Seal**
Front-load washing machines have rubber door seals that can crack or wear out. A damaged door seal causes water to leak during the wash cycle. Professional washing machine repair involves seal replacement.

**Loose or Damaged Hose**
Check hoses connecting to your washing machine. Loose hose connections are easy washing machine repairs - simply tighten the connections. Damaged hoses need replacement.

**Worn Water Pump Seal**
Water pump seal failure causes leaks during or after the wash cycle. This washing machine repair requires professional technician expertise.

**Cracked Drum**
A cracked washing machine drum requires immediate attention. This serious washing machine issue leads to water leakage and damage to internal components.

**Clogged Drain Hose**
Blockages in the drain hose prevent proper water drainage. This simple washing machine repair often involves cleaning the drain hose.

## Where Is Your Washing Machine Leaking?

**Leaking from Bottom**
- Faulty drain pump
- Worn water pump seal
- Cracked drum
- Clogged drain

**Leaking from Front or Door**
- Broken door seal
- Door catch problems
- Drum damage

**Leaking from Top**
- Loose inlet hose connections
- Faulty inlet valve
- Overflow issues

## Washing Machine Water Leak Troubleshooting

**Step 1: Locate the Leak**
Determine where water is leaking from to narrow down potential causes.

**Step 2: Check Connections**
Ensure all hoses are properly connected and not kinked.

**Step 3: Inspect Hoses**
Look for cracks, holes, or damage to inlet and drain hoses.

**Step 4: Check Door Seal**
For front-load washers, inspect the rubber door seal for visible damage.

**Step 5: Run a Test Cycle**
If the issue isn't obvious, run a test cycle to observe where water leaks.

## Professional Washing Machine Repair Solutions
Our washing machine repair service includes:
- Water leak diagnosis and location
- Hose replacement and tightening
- Door seal replacement
- Pump repair or replacement
- Drum repair or replacement
- Complete washing machine servicing

## Prevention Tips
- Don't overload your washing machine
- Use the correct amount of detergent
- Inspect hoses regularly
- Schedule preventive washing machine maintenance
- Fix leaks promptly to prevent water damage

Address washing machine water leakage immediately to prevent damage to your floors and walls. Contact our professional washing machine repair team today.`,
    },
    {
      id: 6,
      title: 'Microwave Oven Safety: Tips for Proper Usage',
      excerpt: 'Essential safety guidelines for using your microwave oven.',
      image: 'https://images.pexels.com/photos/8965481/pexels-photo-8965481.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '8 Dec 2024',
      author: 'Sneha Verma',
      category: 'Kitchen Appliances',
      keywords: 'microwave repair, microwave safety, microwave oven maintenance, microwave troubleshooting',
      description: 'Complete safety guide for microwave oven usage, maintenance, and microwave repair solutions.',
      content: `Microwave ovens are incredibly convenient, but improper use can be dangerous. Learn about microwave safety, what items are safe to cook, and maintenance tips to keep your microwave in top condition.

## Microwave Oven Safety Guidelines

**Never Put These Items in Your Microwave:**
- Metal objects (causes arcing)
- Certain ceramics and dinnerware with metallic paint
- Plastic containers not labeled microwave-safe
- Eggs in their shells
- Whole onions or potatoes without piercing
- Closed containers (risk of explosion)

**Foods Safe for Microwave Cooking:**
- Most vegetables
- Fruits
- Grains and rice
- Lean meats and poultry
- Fish and seafood
- Leftovers (properly stored)

## Microwave Oven Maintenance Tips

**Regular Cleaning**
Clean the microwave interior after each use to prevent bacterial growth. Use mild soap and water on a damp cloth. For stubborn stains, microwave a bowl of water with lemon for 3 minutes.

**Check the Door Seal**
Inspect the rubber door seal regularly. A damaged microwave door seal allows radiation leakage. Contact microwave repair service if the seal is cracked.

**Keep Vents Clear**
Ensure air vents around your microwave oven are not blocked to prevent overheating.

**Test Microwave Performance**
If your microwave isn't heating food properly, it may need professional microwave repair or magnetron replacement.

## Common Microwave Oven Problems

**Microwave Not Heating**
The most common microwave issue is failure to heat food. This usually indicates magnetron tube failure, requiring microwave repair.

**Microwave Running But Not Heating**
Check the high-voltage diode and capacitor. These microwave components often need replacement.

**Microwave Stops Mid-Cycle**
Thermal overload protection may be triggered. Let your microwave cool and try again. Persistent issues require microwave repair service.

**Microwave Sparking**
Never use metal in your microwave, as it causes sparking. If sparking occurs with non-metal items, call for microwave repair immediately.

## When to Call Microwave Repair Service
- Microwave not heating food
- Sparking inside microwave
- Door seal damage
- Unusual sounds from microwave
- Buttons not responding
- Microwave overheating

## Microwave Oven Safety Facts
- Modern microwaves are designed to be safe when used properly
- Microwave radiation is contained within the oven
- The microwave only operates when the door is closed
- Properly functioning microwave door seals prevent any radiation leakage

## Professional Microwave Repair
Our microwave repair technicians can diagnose and fix all microwave issues including:
- Magnetron replacement
- Door seal repair
- High-voltage component replacement
- Microwave oven servicing
- Safety inspection

Keep your family safe by using your microwave properly and scheduling regular microwave maintenance. Contact our microwave repair service for any concerns.`,
    },
    {
      id: 7,
      title: 'Geyser Not Heating? Troubleshooting Water Heater Problems',
      excerpt: 'Common geyser problems and how to fix them quickly.',
      image: 'https://images.pexels.com/photos/5632393/pexels-photo-5632393.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '5 Dec 2024',
      author: 'Rajesh Kumar',
      category: 'Water Heater',
      keywords: 'geyser repair, water heater problems, heating element replacement, geyser maintenance',
      description: 'Expert guide to geyser repair, water heater troubleshooting, and heating element replacement solutions.',
      content: `A cold shower in winter is nobody's idea of fun. If your geyser isn't heating water properly, it could be due to several reasons. Discover the most common causes and effective solutions.

## Common Geyser Problems

**Geyser Not Heating Water**
This is the most common geyser problem. Possible causes include:
- Faulty heating element
- Thermostat malfunction
- Power supply issues
- Water heater thermostat setting too low

**Insufficient Hot Water**
Your geyser may produce hot water but not enough:
- Geyser capacity too small for household
- Faulty heating element reducing efficiency
- Thermostat incorrectly set
- Scale buildup inside geyser tank

**Geyser Leaking Water**
Water leaks indicate:
- Corroded geyser tank
- Loose or damaged outlet valve
- Temperature relief valve issues
- Faulty pipe connections

**Discolored or Foul-Smelling Water**
Indicates:
- Rust inside the geyser tank
- Bacterial growth in water heater
- Sediment accumulation

## Geyser Troubleshooting Steps

**Check Power Supply**
Ensure your geyser is receiving power. Check the circuit breaker and power cord.

**Adjust Thermostat**
Verify the thermostat is set to the desired temperature (usually 50-60°C).

**Check Water Supply**
Ensure cold water is flowing into the geyser and hot water outlet isn't blocked.

**Inspect for Leaks**
Look for water pooling around the geyser base, indicating internal leaks.

## Water Heater Repair Solutions

**Heating Element Replacement**
A faulty heating element is the most common cause of geyser heating failure. Our geyser repair service includes professional heating element replacement.

**Thermostat Repair**
A malfunctioning geyser thermostat can't regulate water temperature. Professional geyser repair includes thermostat testing and replacement.

**Anode Rod Replacement**
The anode rod in your geyser tank protects against rust. Regular anode rod replacement extends geyser lifespan and water quality.

**Tank Cleaning and Descaling**
Sediment and scale buildup reduces geyser efficiency. Professional geyser maintenance includes tank cleaning and descaling.

**Valve Repair or Replacement**
Temperature relief valves and inlet valves may need geyser repair or replacement.

## Geyser Maintenance Tips

**Annual Geyser Servicing**
Schedule yearly geyser maintenance to identify problems early and maintain efficiency.

**Flush the Tank**
Flush your geyser tank annually to remove sediment that reduces heating efficiency.

**Monitor Water Temperature**
Keep track of how long it takes to get hot water and the temperature consistency.

**Check Relief Valve**
Test your temperature relief valve monthly to ensure it's functioning.

## When to Call Professional Geyser Repair
- Geyser not producing hot water
- Leaking water
- Strange noises from geyser
- Discolored water
- Geyser age over 10-15 years

## Professional Water Heater Service
Our geyser repair specialists provide:
- Geyser troubleshooting and diagnosis
- Heating element replacement
- Thermostat repair and replacement
- Geyser tank cleaning
- Complete geyser servicing
- Emergency geyser repair

Don't suffer through cold showers. Contact our professional geyser repair service today for fast, reliable water heater solutions.`,
    },
    {
      id: 8,
      title: 'Laptop Overheating? Here\'s How to Keep It Cool',
      excerpt: 'Prevent laptop overheating and extend the life of your device.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2 Dec 2024',
      author: 'Amit Patel',
      category: 'Electronics',
      keywords: 'laptop repair, laptop overheating, cooling solution, thermal paste replacement, laptop maintenance',
      description: 'Complete guide to preventing laptop overheating, laptop cooling solutions, and professional laptop repair.',
      content: `Laptop overheating can slow down performance and damage internal components. Learn effective cooling strategies, from simple cleaning to advanced solutions, to keep your laptop running smoothly.

## Why Laptops Overheat

**Dust Accumulation**
Dust clogging cooling vents is the primary cause of laptop overheating. Regular laptop cleaning prevents thermal issues.

**Aging Thermal Paste**
Thermal paste between the CPU and heat sink degrades over time. Old thermal paste reduces heat transfer efficiency, causing laptop overheating.

**Failing Cooling Fan**
A broken or worn cooling fan can't effectively dissipate heat, leading to laptop overheating and shutdowns.

**Malware or Excessive Background Processes**
Software issues can cause high CPU usage and laptop overheating.

**Blocked Air Vents**
Using your laptop on beds or soft surfaces blocks air vents, causing laptop overheating.

## Laptop Overheating Symptoms
- Laptop shutting down unexpectedly
- Fan running constantly at high speed
- Keyboard area too hot to touch
- Thermal throttling (reduced performance)
- Laptop fan noise increasing

## DIY Laptop Cooling Solutions

**Clean Cooling Vents**
Use compressed air to blow out dust from laptop vents and cooling fans. Do this in a well-ventilated area to avoid inhaling dust.

**Use a Laptop Cooling Pad**
External cooling pads provide additional heat dissipation and improve airflow around your laptop.

**Improve Ventilation**
Ensure your laptop has adequate airflow when in use. Avoid using it on soft surfaces.

**Close Unnecessary Applications**
Running multiple heavy applications increases CPU usage and laptop heat. Close programs you're not actively using.

**Update Drivers and BIOS**
Outdated drivers can cause inefficient power management. Update graphics and chipset drivers to improve laptop efficiency.

**Monitor Temperature**
Use laptop temperature monitoring software to track CPU and GPU temperatures and take action before overheating occurs.

## Professional Laptop Repair Solutions

**Thermal Paste Replacement**
Over time, thermal paste dries out. Professional laptop repair includes thermal paste reapplication for improved heat transfer.

**Cooling Fan Replacement**
A failing laptop cooling fan needs immediate replacement to prevent further overheating damage.

**Heatsink Cleaning**
Professional laptop repair includes thorough heatsink cleaning to remove thermal paste residue and dust.

**Internal Cleaning**
Professional technicians perform complete internal laptop cleaning to remove accumulated dust from all components.

**Motherboard Inspection**
Our laptop repair service includes inspection for any heat-related damage to internal components.

## Laptop Maintenance Tips
- Clean cooling vents monthly
- Avoid using laptop on soft surfaces
- Maintain adequate airflow around your device
- Monitor laptop temperature regularly
- Update software regularly
- Back up important data regularly

## When to Seek Professional Help
- Laptop shutting down due to heat
- Cooling fan not working
- Keyboard overheating
- Persistent high CPU temperatures
- Laptop performance degradation due to thermal throttling

## Professional Laptop Cooling Service
Our certified laptop repair technicians offer:
- Laptop thermal diagnosis
- Cooling system cleaning
- Thermal paste replacement
- Cooling fan replacement
- Complete laptop overheating solutions
- Preventive maintenance

Protect your laptop investment by addressing overheating issues promptly. Contact our professional laptop repair service today.`,
    },
    {
      id: 9,
      title: 'Ceiling Fan Making Noise? Expert Fixes',
      excerpt: 'How to diagnose and fix noisy ceiling fans.',
      image: 'https://images.pexels.com/photos/3912998/pexels-photo-3912998.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '30 Nov 2024',
      author: 'Sneha Verma',
      category: 'Home Comfort',
      keywords: 'ceiling fan repair, noisy fan, fan blade balancing, ceiling fan maintenance, fan motor repair',
      description: 'Complete guide to fixing noisy ceiling fans, blade balancing, and professional ceiling fan repair service.',
      content: `A squeaking or rattling ceiling fan can drive you crazy. Most noise issues are easily fixable with basic maintenance and tightening. Learn what causes ceiling fan noise and how to fix it.

## Common Ceiling Fan Noises and Causes

**Squeaking Noise**
Squeaking indicates:
- Dry motor bearings
- Friction in the fan mechanism
- Worn lubrication

**Rattling or Clicking Sound**
Rattling can be caused by:
- Loose fan blades
- Loose mounting brackets
- Objects in blade path
- Loose motor housing

**Grinding Noise**
Grinding suggests:
- Motor bearing failure
- Internal mechanical damage
- Requires immediate ceiling fan repair

**Buzzing Sound**
Buzzing indicates:
- Loose electrical connections
- Faulty capacitor
- Blade imbalance

## Ceiling Fan Troubleshooting Steps

**Step 1: Turn Off the Fan**
Safety first - always turn off the ceiling fan before inspection.

**Step 2: Inspect Blade Mounting**
Check if fan blades are securely attached to the motor housing. Tighten any loose bolts.

**Step 3: Check Mounting Bracket**
Verify the ceiling mount bracket is tight and secure. A loose ceiling fan mount causes vibration and noise.

**Step 4: Look for Obstructions**
Check if anything is touching the fan blades during rotation.

**Step 5: Examine Motor Housing**
Ensure the motor casing is properly secured to the mounting bracket.

## Ceiling Fan Blade Balancing

**Why Balancing Matters**
Unbalanced fan blades create vibration and noise. Blade balancing reduces stress on the motor and extends ceiling fan lifespan.

**DIY Blade Balancing**
1. Turn off the ceiling fan
2. Mark the center of each blade with tape
3. Attach small weights to the lighter blade
4. Run the fan and adjust weights until vibration decreases

**Professional Blade Balancing**
Our ceiling fan repair service includes precision blade balancing for smooth, quiet operation.

## Ceiling Fan Maintenance

**Monthly Tasks**
- Visually inspect blades and mounting
- Test for unusual sounds
- Check blade balance

**Quarterly Tasks**
- Dust and clean blades
- Check all bolts and connections
- Lubricate motor if applicable

**Annual Tasks**
- Professional ceiling fan inspection
- Complete ceiling fan servicing
- Bearing lubrication or replacement

## Common Ceiling Fan Repairs

**Loose Blade Tightening**
A simple ceiling fan repair involving tightening blade mounting bolts.

**Mounting Bracket Repair**
Loose or damaged ceiling brackets need tightening or replacement.

**Motor Bearing Lubrication**
Many ceiling fans benefit from bearing lubrication to reduce squeaking.

**Capacitor Replacement**
A faulty capacitor can cause buzzing and fan motor issues requiring professional ceiling fan repair.

**Motor Replacement**
For grinding or severely damaged motors, motor replacement is the best ceiling fan repair solution.

## Prevention Tips
- Install ceiling fan properly to exact specifications
- Use appropriate fan size for room dimensions
- Maintain regular cleaning schedule
- Don't overload ceiling fan with too many blades
- Have annual professional ceiling fan inspection

## When to Call Professional Ceiling Fan Repair
- Persistent grinding noise (motor damage)
- Severe vibration and shaking
- Electrical buzzing sounds
- Motor not running smoothly
- Unable to identify noise source

## Professional Ceiling Fan Service
Our certified technicians provide:
- Ceiling fan noise diagnosis
- Blade balancing and tightening
- Mounting bracket repair
- Motor bearing service
- Capacitor replacement
- Complete ceiling fan servicing

Don't let a noisy ceiling fan disrupt your comfort. Contact our professional ceiling fan repair service today for quick solutions.`,
    },
  ];

  return (
    <div className="pt-8">
      <div className="bg-gradient-to-r from-blue-900 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 scroll-reveal">Blog</h1>
          <p className="text-xl text-blue-100 scroll-reveal" style={{ animationDelay: '0.1s' }}>
            Tips, tricks, and insights from our expert technicians
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <div
              key={blog.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-500 scroll-reveal transform hover:scale-105 group"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold">
                  {blog.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>

                <div className="space-y-2 mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedBlog(blog.id)}
                  className="w-full flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-700 font-semibold py-2 px-4 rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all duration-300 group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-orange-700 text-white rounded-3xl p-12 scroll-reveal">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
            <p className="text-blue-100 mb-6">
              Get expert tips on appliance maintenance and repair delivered to your inbox weekly.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedBlog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            {(() => {
              const blog = blogs.find((b) => b.id === selectedBlog);
              if (!blog) return null;

              return (
                <div>
                  <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-orange-700 text-white p-8 flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-orange-200 text-sm font-semibold mb-2">{blog.category}</p>
                      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
                      <p className="text-blue-100 text-sm">Keywords: {blog.keywords}</p>
                    </div>
                    <button
                      onClick={() => setSelectedBlog(null)}
                      className="text-white hover:bg-white/20 p-2 rounded-lg transition-all ml-4 flex-shrink-0"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="p-8">
                    <div className="relative h-96 overflow-hidden rounded-2xl mb-8">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b-2 border-gray-200">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="text-sm">By {blog.author}</span>
                      </div>
                      <div className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                        {blog.category}
                      </div>
                    </div>

                    <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
                      <p className="text-gray-700 italic text-lg">{blog.excerpt}</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      {blog.content.split('\n\n').map((paragraph, idx) => {
                        if (paragraph.startsWith('##')) {
                          return (
                            <h2
                              key={idx}
                              className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                            >
                              {paragraph.replace(/^##\s/, '')}
                            </h2>
                          );
                        }

                        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                          return (
                            <h3 key={idx} className="text-lg font-bold text-gray-900 mt-6 mb-3">
                              {paragraph.replace(/\*\*/g, '')}
                            </h3>
                          );
                        }

                        if (paragraph.startsWith('-')) {
                          const items = paragraph.split('\n').map((item) => item.replace(/^-\s/, ''));
                          return (
                            <ul key={idx} className="list-disc list-inside space-y-2 text-gray-700 my-4">
                              {items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          );
                        }

                        return (
                          <p key={idx} className="text-gray-700 leading-relaxed text-base mb-4">
                            {paragraph}
                          </p>
                        );
                      })}
                    </div>

                    <div className="mt-12 pt-8 border-t-2 border-gray-200">
                      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">About This Article</h3>
                        <p className="text-gray-700 mb-4">
                          <strong>Category:</strong> {blog.category}
                        </p>
                        <p className="text-gray-700 mb-4">
                          <strong>Author:</strong> {blog.author}
                        </p>
                        <p className="text-gray-700 mb-4">
                          <strong>Published:</strong> {blog.date}
                        </p>
                        <p className="text-gray-700">
                          <strong>SEO Description:</strong> {blog.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-orange-50 border-2 border-orange-200 rounded-xl">
                      <p className="text-orange-900 font-semibold mb-2">
                        Need Professional Help?
                      </p>
                      <p className="text-orange-800 text-sm mb-4">
                        Our expert technicians are ready to assist with all your appliance repair and maintenance needs.
                      </p>
                      <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                        Book Service Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
