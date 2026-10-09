import React from 'react';
import { GraduationCap, Clock, Calendar, MessageCircle, Phone, Award } from 'lucide-react';
import { BusinessConfig, LessonInfo } from '../data/businessConfig';

interface SwimmingLessonsProps {
  config: BusinessConfig;
}

export const SwimmingLessons: React.FC<SwimmingLessonsProps> = ({ config }) => {
  const getLessonsWhatsAppUrl = () => {
    const text = encodeURIComponent(
      'Hello Canadian Swimming Pool, I would like to enquire about swimming lessons, batch timings, and coaching fees.'
    );
    return `https://wa.me/${config.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="lessons" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-[#00AEEF] uppercase tracking-wider">
            Coaching & Skill Development
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#073B66] tracking-tight">
            Swimming Lessons & Coaching
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Learn swimming fundamentals, gain water confidence, or improve your stroke efficiency. Small batches tailored for kids and beginner adults in Ludhiana.
          </p>
        </div>

        {/* 3 Lesson Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.lessons.map((lesson: LessonInfo) => (
            <div
              key={lesson.id}
              className="bg-[#F1FAFF]/60 hover:bg-[#F1FAFF] rounded-2xl border border-sky-100 p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-sky-100 flex items-center justify-center text-[#00AEEF] mb-4 shadow-2xs">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-[#073B66]">
                  {lesson.title}
                </h3>
                
                <p className="mt-1 text-xs font-semibold text-[#00AEEF]">
                  For: {lesson.targetGroup}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {lesson.description}
                </p>

                <div className="mt-6 pt-5 border-t border-sky-200/60 space-y-2.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#073B66] shrink-0" />
                    <span><strong>Timings:</strong> {lesson.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#073B66] shrink-0" />
                    <span><strong>Duration:</strong> {lesson.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#073B66] shrink-0" />
                    <span><strong>Fees:</strong> {lesson.fees}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer action */}
              <div className="mt-6 pt-4 border-t border-sky-200/40">
                <a
                  href={getLessonsWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#073B66] bg-white hover:bg-sky-50 border border-sky-200 rounded-lg transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Enquire for this Batch</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lessons Enrollment Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#073B66] to-[#0B4A7F] rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Ready to begin swimming classes?
            </h3>
            <p className="mt-2 text-sm text-sky-100">
              Registration is handled directly with the coach and pool management. Inquire about current summer batches, personal coaching, and timings.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={getLessonsWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#073B66] bg-white hover:bg-sky-50 rounded-lg shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#00AEEF]" />
              <span>Enquire About Swimming Classes</span>
            </a>

            <a
              href={`tel:${config.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call {config.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
