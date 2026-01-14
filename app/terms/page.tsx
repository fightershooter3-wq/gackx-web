import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
  return (
    <main className=\"min-h-screen\">
      <Navbar />
      <div className=\"pt-32 pb-20 container mx-auto px-4 max-w-4xl\">
        <h1 className=\"text-4xl font-bold mb-8\">Terms of Service</h1>
        <div className=\"prose prose-blue dark:prose-invert max-w-none\">
          <p className=\"text-muted-foreground\">Last updated: January 14, 2026</p>
          
          <h2>1. Agreement to Terms</h2>
          <p>By accessing or using GACKX (vlovsol.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on GACKX's website for personal, non-commercial transitory viewing only.</p>
          <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display;</li>
            <li>Attempt to decompile or reverse engineer any software contained on GACKX's website;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>The materials on GACKX's website are provided on an 'as is' basis. GACKX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

          <h2>4. Limitations</h2>
          <p>In no event shall GACKX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GACKX's website.</p>

          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on GACKX's website could include technical, typographical, or photographic errors. GACKX does not warrant that any of the materials on its website are accurate, complete or current. GACKX may make changes to the materials contained on its website at any time without notice.</p>

          <h2>6. Links</h2>
          <p>GACKX has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GACKX of the site. Use of any such linked website is at the user's own risk.</p>

          <h2>7. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which GACKX operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
