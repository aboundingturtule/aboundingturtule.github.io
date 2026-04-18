import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'autonomous-drone-v1',
    title: 'Autonomous Navigation Drone',
    shortDescription: 'Long-range autonomous flight system with computer vision.',
    fullDescription: 'A fully autonomous quadcopter designed for environmental monitoring in dense forest environments. Utilizes SLAM for mapping and high-precision GPS for global positioning. The structural frame was topology-optimized for minimal weight while maintaining rigidity for high-speed maneuvers.',
    thumbnail: 'https://picsum.photos/seed/drone/800/600',
    images: [
      'https://picsum.photos/seed/drone-1/1200/800',
      'https://picsum.photos/seed/drone-2/1200/800',
      'https://picsum.photos/seed/drone-3/1200/800'
    ],
    techStack: ['Python', 'C++', 'ROS 2', 'OpenCV', 'SolidWorks'],
    category: 'Aerospace',
    date: '2024-03',
    stats: [
      { label: 'FLIGHT TIME', value: '42 MIN' },
      { label: 'PAYLOAD', value: '1.2 KG' },
      { label: 'MAX SPEED', value: '72 KM/H' }
    ]
  },
  {
    id: 'precision-linear-actuator',
    title: 'Precision Linear Actuator',
    shortDescription: 'Sub-micron precision actuator for lab automation.',
    fullDescription: 'Custom linear actuator designed for high-precision optical alignment. Features a closed-loop control system with laser interferometry feedback. The mechanical assembly uses ceramic bearings to eliminate thermal expansion issues.',
    thumbnail: 'https://picsum.photos/seed/actuator/800/600',
    images: [
      'https://picsum.photos/seed/actuator-1/1200/800',
      'https://picsum.photos/seed/actuator-2/1200/800'
    ],
    techStack: ['STM32', 'Control Systems', 'MATLAB', 'Mechanical Design'],
    category: 'Mechanical',
    date: '2023-11',
    stats: [
      { label: 'PRECISION', value: '0.05 μm' },
      { label: 'FORCE', value: '500 N' },
      { label: 'LATENCY', value: '< 2 MS' }
    ]
  },
  {
    id: 'distributed-sensor-mesh',
    title: 'Industrial IoT Sensor Mesh',
    shortDescription: 'Scalable mesh network for real-time factory monitoring.',
    fullDescription: 'A distributed system of over 200 nodes monitoring vibration, temperature, and power consumption across a large manufacturing facility. Implements a custom low-power wireless protocol for 2-year battery life per node.',
    thumbnail: 'https://picsum.photos/seed/mesh/800/600',
    images: [
      'https://picsum.photos/seed/mesh-1/1200/800',
      'https://picsum.photos/seed/mesh-2/1200/800'
    ],
    techStack: ['Embedded Rust', 'MQTT', 'Golang', 'InfluxDB'],
    category: 'Electronics',
    date: '2024-01',
    stats: [
      { label: 'NODES', value: '250+' },
      { label: 'UPTIME', value: '99.98%' },
      { label: 'COST/NODE', value: '$12.00' }
    ]
  },
  {
    id: 'ai-power-optimizer',
    title: 'AI Power Grid Optimizer',
    shortDescription: 'Neural network for load balancing in local microgrids.',
    fullDescription: 'Software-defined energy management system that uses LSTM neural networks to predict renewable energy yield and optimize storage utilization. Reduced peak demand charges by 30% for tested commercial buildings.',
    thumbnail: 'https://picsum.photos/seed/grid/800/600',
    images: [
      'https://picsum.photos/seed/grid-1/1200/800',
      'https://picsum.photos/seed/grid-2/1200/800'
    ],
    techStack: ['PyTorch', 'TypeScript', 'Docker', 'SCADA'],
    category: 'Software',
    date: '2023-08',
    stats: [
      { label: 'EFFICIENCY', value: '+30%' },
      { label: 'TRAINING SET', value: '4.2 TB' },
      { label: 'REGIONS', value: 'GLOBAL' }
    ]
  }
];
