'use client';

import React from 'react';
import { vehicles, getVehicleBySlug, Vehicle } from '@/data/vehicles-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Activity, TrendingUp, Zap, Gauge, Clock, Rocket } from 'lucide-react';

interface VehiclePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const VehicleDetailPage: React.FC<VehiclePageProps> = ({ params }) => {
  const [vehicle, setVehicle] = React.useState<Vehicle | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadVehicle = async () => {
      const resolvedParams = await params;
      const vehicleData = getVehicleBySlug(resolvedParams.slug);
      setVehicle(vehicleData || null);
      setLoading(false);
      
      if (!vehicleData) {
        notFound();
      }
    };
    
    loadVehicle();
  }, [params]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return null;
  }

  const getStatusColor = (status: Vehicle['status']) => {
    switch (status) {
      case 'active':
        return 'from-green-500 to-emerald-600';
      case 'testing':
        return 'from-yellow-500 to-orange-600';
      case 'development':
        return 'from-blue-500 to-indigo-600';
      case 'retired':
        return 'from-gray-500 to-gray-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusText = (status: Vehicle['status']) => {
    switch (status) {
      case 'active':
        return 'Active';
      case 'testing':
        return 'Testing';
      case 'development':
        return 'Development';
      case 'retired':
        return 'Retired';
      default:
        return 'Unknown';
    }
  };

  const SpecificationCard: React.FC<{
    icon: React.ReactNode;
    label: string;
    value: string;
    description?: string;
  }> = ({ icon, label, value, description }) => (
    <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700/50">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-white">{label}</h3>
          {description && <p className="text-xs text-slate-400">{description}</p>}
        </div>
      </div>
      <p className="text-2xl font-bold text-blue-400">{value}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <Link
            href="/vehicles"
            className="inline-flex items-center text-slate-300 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Vehicles
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Vehicle Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getStatusColor(vehicle.status)}`}>
                  {getStatusText(vehicle.status)}
                </div>
                <div className="flex items-center text-slate-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  {vehicle.year}
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {vehicle.name}
              </h1>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              <p className="text-xl text-slate-300 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Vehicle Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-2xl flex items-center justify-center">
                  {vehicle.image ? (
                    <img
                      src={vehicle.image}
                      alt={`${vehicle.name} Mission Patch`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Rocket className="w-32 h-32 text-slate-400" />
                  )}
                </div>
                {/* Decorative glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Detailed technical specifications and performance characteristics of the {vehicle.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <SpecificationCard
              icon={<TrendingUp className="w-5 h-5 text-blue-400" />}
              label="Apogee"
              value={vehicle.specifications.apogee || 'TBD'}
              description="Maximum altitude (m)"
            />
            <SpecificationCard
              icon={<Zap className="w-5 h-5 text-blue-400" />}
              label="Max Velocity"
              value={vehicle.specifications.maxVelocity || 'TBD'}
              description="Maximum velocity (m/s)"
            />
            <SpecificationCard
              icon={<Gauge className="w-5 h-5 text-blue-400" />}
              label="Max Acceleration"
              value={vehicle.specifications.maxAcceleration || 'TBD'}
              description="Maximum acceleration (m/s²)"
            />
            <SpecificationCard
              icon={<Clock className="w-5 h-5 text-blue-400" />}
              label="Flight Time"
              value={vehicle.specifications.flightTime || 'TBD'}
              description="Total flight time (s)"
            />
          </div>
        </div>
      </section>

      {/* Other Vehicles Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Other Vehicles
            </h2>
            <p className="text-slate-300">Explore more vehicles from our fleet</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vehicles
              .filter(v => v.id !== vehicle.id)
              .slice(0, 3)
              .map((otherVehicle) => (
                <Link key={otherVehicle.id} href={`/vehicles/${otherVehicle.slug}`}>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-700/50 cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getStatusColor(otherVehicle.status)}`}>
                        {getStatusText(otherVehicle.status)}
                      </div>
                      <span className="text-sm text-slate-400">{otherVehicle.year}</span>
                    </div>

                    <div className="w-full h-32 mb-4 rounded-lg overflow-hidden flex items-center justify-center">
                      {otherVehicle.image ? (
                        <img
                          src={otherVehicle.image}
                          alt={`${otherVehicle.name} Mission Patch`}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <Rocket className="w-12 h-12 text-slate-400" />
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{otherVehicle.name}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2">{otherVehicle.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};


export default VehicleDetailPage;