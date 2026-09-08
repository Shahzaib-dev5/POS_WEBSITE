import React, { useState } from 'react';
import { X, Code2, Copy, Check, Download, FileCode, Sparkles, FolderArchive, Layers } from 'lucide-react';
import JSZip from 'jszip';
import { PHP_BOOTSTRAP_TEMPLATES } from '../data/posData';
import { PhpFileTemplate } from '../types';

interface PhpCodeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhpCodeViewerModal: React.FC<PhpCodeViewerModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<PhpFileTemplate>(PHP_BOOTSTRAP_TEMPLATES[0]);
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();

      // Add all PHP and CSS files
      PHP_BOOTSTRAP_TEMPLATES.forEach((template) => {
        zip.file(template.filename, template.content);
      });

      // Add official ZRM POS SVG logos into ZIP export
      try {
        const logoRes = await fetch('/zrm-pos-logo.svg');
        if (logoRes.ok) {
          const logoText = await logoRes.text();
          zip.file('zrm-pos-logo.svg', logoText);
        }
        const darkLogoRes = await fetch('/zrm-pos-logo-dark.svg');
        if (darkLogoRes.ok) {
          const darkLogoText = await darkLogoRes.text();
          zip.file('zrm-pos-logo-dark.svg', darkLogoText);
        }
        const iconRes = await fetch('/zrm-pos-icon.svg');
        if (iconRes.ok) {
          const iconText = await iconRes.text();
          zip.file('zrm-pos-icon.svg', iconText);
        }
      } catch (err) {
        console.warn('Could not bundle SVG logos into zip', err);
      }

      // Add a helpful deployment README
      const readmeContent = `# eMobile POS - Plain PHP & Bootstrap 5 Website
Developed for ZRM Solutions (zrmsolutions.com)
Live System Portal: http://emobile.zrmsolutions.com/

## Files Included:
- index.php: Home page with hero, live preview cards, core features, and CTAs.
- about.php: Company background, mission, and hardware compatibility.
- services.php: Detailed breakdown of POS modules (IMEI tracking, repair job sheets, billing).
- contact.php: Functional contact form with PHP server-side validation.
- header.php: Modular navigation header with Bootstrap 5.3 CDN & dynamic active links.
- footer.php: Global footer with company links, live portal button, and copyright.
- style.css: Clean CSS3 styles with modern typography & responsive adjustments.

## How to Deploy:
1. Upload all extracted files to your web server (Apache, Nginx, cPanel, or XAMPP htdocs).
2. Ensure PHP 7.4 or PHP 8+ is enabled.
3. Access the website at your domain (e.g. http://yourdomain.com/ or your subfolder).
4. Direct users to the live POS terminal at http://emobile.zrmsolutions.com/
`;
      zip.file('README.md', readmeContent);

      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'emobile-pos-php-bootstrap5.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to create zip', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs overflow-y-auto">
      <div className="bg-slate-900 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 w-full max-w-5xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Plain PHP & Bootstrap 5 Source Package
                </h2>
                <span className="text-[10px] uppercase font-bold bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded">
                  Ready to Deploy
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Created with HTML5, CSS3, and mobile-friendly Bootstrap 5 framework.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadZip}
              disabled={isZipping}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow transition-all cursor-pointer"
            >
              <FolderArchive className="w-4 h-4" />
              <span>{isZipping ? 'Packaging...' : 'Download Full ZIP'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* File Tabs & Main View */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          {/* File Explorer Sidebar */}
          <div className="w-full md:w-64 bg-slate-950/60 border-b md:border-b-0 md:border-r border-slate-800 p-3 space-y-1 overflow-y-auto">
            <div className="text-[10px] uppercase font-bold text-slate-500 px-2 py-1 flex items-center gap-1.5">
              <Layers className="w-3 h-3" />
              <span>PHP & CSS Files</span>
            </div>

            {PHP_BOOTSTRAP_TEMPLATES.map((file) => {
              const isSelected = selectedFile.filename === file.filename;
              return (
                <button
                  key={file.filename}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left ${
                    isSelected
                      ? 'bg-blue-600 text-white font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-blue-400'}`} />
                    <span className="truncate">{file.filename}</span>
                  </div>
                </button>
              );
            })}

            <div className="pt-4 px-2">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="font-semibold text-slate-200">How to use:</div>
                <p>Upload these files to your cPanel, Apache, or XAMPP public folder for instant deployment.</p>
              </div>
            </div>
          </div>

          {/* Code Viewer Panel */}
          <div className="flex-1 flex flex-col bg-slate-900 overflow-hidden">
            {/* File info bar */}
            <div className="px-4 py-2.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-xs">
              <div>
                <span className="font-mono font-bold text-blue-400">{selectedFile.filename}</span>
                <span className="text-slate-500 ml-2 hidden sm:inline">{selectedFile.description}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>
            </div>

            {/* Code Content */}
            <div className="flex-1 overflow-auto p-4 font-mono text-xs text-slate-300 bg-slate-950/90 leading-relaxed select-text">
              <pre>
                <code>{selectedFile.content}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="bg-slate-950 px-5 py-2.5 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap justify-between items-center gap-2">
          <span>Bootstrap 5.3 CDN integrated & mobile-responsive.</span>
          <span className="text-slate-500">Target Server: Apache / Nginx / PHP 7.4+</span>
        </div>
      </div>
    </div>
  );
};
