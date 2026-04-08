import React, { useState } from 'react';
import { X, Upload, Plus, CheckCircle, Shield, Wrench } from 'lucide-react';
import TagExamples, { TagExample, defaultTags } from './TagExamples';

interface CreateTagModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (tag: TagExample) => void;
}

const CreateTagModal: React.FC<CreateTagModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'safety' | 'maintenance'>('maintenance');
  const [subType, setSubType] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [dueDate, setDueDate] = useState('');
  const [mockImages, setMockImages] = useState<string[]>([]);

  const getSubTypes = (tagType: string): { value: string; label: string }[] => {
    switch (tagType) {
      case 'safety':
        return [
          { value: 'unsafe-act', label: 'Unsafe Act' },
          { value: 'near-miss', label: 'Near Miss' },
          { value: 'minor-injury', label: 'Minor Injury' },
          { value: 'serious-injury', label: 'Serious Injury' },
        ];
      case 'maintenance':
        return [
          { value: 'breakdown', label: 'Breakdown' },
          { value: 'preventive', label: 'Preventive' },
          { value: 'corrective', label: 'Corrective' },
          { value: 'inspection', label: 'Inspection' },
          { value: 'calibration', label: 'Calibration' },
        ];
      default:
        return [];
    }
  };

  const getTypeConfig = (tagType: 'safety' | 'maintenance') => {
    switch (tagType) {
      case 'safety':
        return {
          label: 'Bezbednost',
          typeColor: 'bg-red-100 text-red-800',
          icon: Shield,
        };
      case 'maintenance':
        return {
          label: 'Održavanje',
          typeColor: 'bg-yellow-100 text-yellow-800',
          icon: Wrench,
        };
    }
  };

  const getPriorityConfig = (p: 'low' | 'medium' | 'high') => {
    switch (p) {
      case 'low':
        return { label: 'Nizak', color: 'bg-green-100 text-green-800' };
      case 'medium':
        return { label: 'Srednji', color: 'bg-orange-100 text-orange-800' };
      case 'high':
        return { label: 'Visok', color: 'bg-red-100 text-red-800' };
    }
  };

  const handleMockImageUpload = () => {
    const mockImageUrl = `https://picsum.photos/seed/${Date.now()}/400/300`;
    setMockImages([...mockImages, mockImageUrl]);
  };

  const handleRemoveImage = (index: number) => {
    setMockImages(mockImages.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setType('maintenance');
    setSubType('');
    setPriority('medium');
    setDueDate('');
    setMockImages([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const typeConfig = getTypeConfig(type);
    const priorityConfig = getPriorityConfig(priority);

    const newTag: TagExample = {
      id: `T-2025-${String(Math.floor(Math.random() * 900) + 100)}`,
      title,
      description,
      type: typeConfig.label,
      typeColor: typeConfig.typeColor,
      priority: priorityConfig.label,
      priorityColor: priorityConfig.color,
      location: 'Nova lokacija',
      locationLabel: 'Lokacija',
      assigned: 'Korisnik',
      assignedAvatar: '/src/images/andrej (1).jpeg',
      status: 'Open',
      statusColor: 'bg-blue-100 text-blue-800',
      icon: typeConfig.icon,
      image: mockImages.length > 0 ? mockImages[0] : undefined,
    };

    onSubmit(newTag);
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors">
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between transition-colors">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors">Kreiraj Tag</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400 transition-colors" strokeWidth={2} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white mb-1 transition-colors">
              Naslov <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Unesite jasan, opisni naslov"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tip <span className="text-red-500">*</span>
            </label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value as 'safety' | 'maintenance');
                setSubType('');
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="safety">Bezbednost</option>
              <option value="maintenance">Održavanje</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Podtip <span className="text-red-500">*</span>
            </label>
            <select
              value={subType}
              onChange={(e) => setSubType(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Izaberite podtip</option>
              {getSubTypes(type).map((st) => (
                <option key={st.value} value={st.value}>
                  {st.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Opis <span className="text-red-500">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Opisite problem detaljno"
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prioritet <span className="text-red-500">*</span>
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="low">Nizak</option>
              <option value="medium">Srednji</option>
              <option value="high">Visok</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rok
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload slika (Opciono)
            </label>

            {mockImages.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                {mockImages.map((img, index) => (
                  <div key={index} className="relative group">
                    <img src={img} alt={`Upload ${index + 1}`} className="w-full h-24 object-cover rounded-lg border-2 border-gray-200" />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={handleMockImageUpload}
              className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Kliknite za upload ili prevucite i pustite</p>
              <p className="text-xs text-gray-500 mt-1">PNG, JPG do 10MB</p>
            </button>
          </div>

          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Otkaži
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Kreiraj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Slide4Content: React.FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [tags, setTags] = useState<TagExample[]>(defaultTags);

  const handleAddTag = (newTag: TagExample) => {
    setTags((prev) => [...prev, newTag]);
  };

  return (
    <div className="h-full flex items-center justify-center px-3 sm:px-8 py-4 overflow-y-auto">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start">
          <div className="space-y-3 sm:space-y-5 order-2 md:order-1">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 transition-colors">Tagovi</h2>
              <p className="text-sm sm:text-lg text-gray-600 dark:text-white transition-colors">
                Digitalni sistem za prijavljivanje i praćenje problema
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Upload slika direktno sa telefona</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Dokumentujte problem sa vizuelnim prikazom</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Kategorizacija</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Bezbednost i Održavanje</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Prioriteti i rokovi</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Nizak, Srednji, Visok sa due date-om</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-4">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5 sm:mt-1" strokeWidth={2} />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-lg transition-colors">Automatska dodela</h4>
                  <p className="text-xs sm:text-base text-gray-600 dark:text-white transition-colors">Dodeljuje se odgovornom licu za rešavanje</p>
                </div>
              </div>
            </div>

            {/* Create Tag Button */}
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="mt-4 sm:mt-6 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm sm:text-base"
            >
              <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
              <span>Kreiraj Tag</span>
            </button>
          </div>

          <div className="order-1 md:order-2 md:-mt-4">
            <TagExamples tags={tags} />
          </div>
        </div>
      </div>

      <CreateTagModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleAddTag}
      />
    </div>
  );
};

export default Slide4Content;
