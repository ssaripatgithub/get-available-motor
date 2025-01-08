import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
} from 'aws-lambda';
import { Motor } from './types';

export const handler = async (
  _event: APIGatewayProxyEventV2
): Promise<APIGatewayProxyStructuredResultV2> => {
  const created_at = new Date().toISOString();
  const motors: Array<Motor> = [
    {
      id: '9783F5D8-F767-4264-8318-90C02C94714B',
      name: 'Honda Click 125i',
      type: 'Scooter',
      transmission: 'Automatic',
      daily_rate: 500,
      availability: true,
      description:
        'Fuel-efficient scooter with a sleek design, perfect for city commutes.',
      image_url: 'https://example.com/images/honda-click-125i.jpg',
      created_at,
    },
    {
      id: '01D48DFB-9C3C-4131-99A1-6007BEF909E9',
      name: 'Yamaha Mio Aerox',
      type: 'Scooter',
      transmission: 'Automatic',
      daily_rate: 600,
      availability: true,
      description: 'A sporty scooter with advanced features for a smooth ride.',
      image_url: 'https://example.com/images/yamaha-mio-aerox.jpg',
      created_at,
    },
    {
      id: '5930B1D3-1914-4473-8237-B5FC9E4EB51D',
      name: 'Suzuki Raider R150',
      type: 'Underbone',
      transmission: 'Manual',
      daily_rate: 650,
      availability: true,
      description:
        'A popular choice among riders, known for its speed and agility.',
      image_url: 'https://example.com/images/suzuki-raider-r150.jpg',
      created_at,
    },
    {
      id: '3A19B951-3B38-4483-833B-F4FCD0D7AC8A',
      name: 'Honda XR150L',
      type: 'Dual Sport',
      transmission: 'Manual',
      daily_rate: 750,
      availability: true,
      description: 'Perfect for off-road adventures and rugged terrains.',
      image_url: 'https://example.com/images/honda-xr150l.jpg',
      created_at,
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify(motors),
  };
};
