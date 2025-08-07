# FinTrack - Personal Finance Dashboard

A modern, responsive financial tracking dashboard built with Next.js, TypeScript, and Tailwind CSS. FinTrack helps you manage your personal finances with an intuitive interface for tracking transactions, monitoring balances, and analyzing spending patterns.


## 🚀 Features

- **Dashboard Overview**: Real-time financial summary with balance, credits, debits, and transaction counts
- **Transaction Management**: Sortable transaction table with filtering and search capabilities  
- **Responsive Design**: Mobile-first approach that works seamlessly across all devices
- **TypeScript Support**: Fully typed for better development experience and code reliability
- **Modern UI**: Clean, professional interface with intuitive navigation
- **Real-time Updates**: Dynamic percentage changes and trend indicators

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React for consistent iconography
- **State Management**: React hooks for local state management

## 📦 Installation

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fintrack.git
   cd fintrack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see FinTrack in action.

## 🏗️ Project Structure

```
fintrack/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SummaryCard.tsx
│   │   ├── TransactionTable.tsx
│   │   └── WalletHeader.tsx
│   ├── lib/
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── tailwind.config.js
└── package.json
```

## 🔧 Development

You can start editing the application by modifying `app/page.tsx`. The page auto-updates as you edit the file thanks to Next.js hot reloading.

### Key Components

- **Dashboard**: Main dashboard layout with summary cards and transaction table
- **TransactionTable**: Sortable table component with transaction data
- **SummaryCard**: Reusable card component for displaying financial metrics
- **Header/Sidebar**: Navigation components for the application layout

### Data Structure

The application uses TypeScript interfaces for type safety:

```typescript
interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: 'Credit' | 'Debit';
}

interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}
```

## 🎨 Customization

FinTrack uses Tailwind CSS for styling. You can customize the appearance by:

1. **Colors**: Modify the color scheme in `tailwind.config.js`
2. **Typography**: Adjust font sizes and families in the configuration
3. **Spacing**: Update margins, padding, and layout spacing
4. **Components**: Customize individual component styles in their respective files

## 📱 Responsive Design

FinTrack is built mobile-first with responsive breakpoints:

- **Mobile**: Base styles (< 768px)
- **Tablet**: Medium screens (768px - 1024px)
- **Desktop**: Large screens (> 1024px)

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy FinTrack is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

### Other Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Railway**: Deploy with automatic HTTPS and custom domains
- **Digital Ocean**: Use App Platform for scalable deployments

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more deployment options.

## 📚 Learn More

To learn more about the technologies used in FinTrack:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Master TypeScript
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [React Documentation](https://react.dev/) - Learn React fundamentals

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js) for contributions and feedback.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Future Enhancements

- [ ] User authentication and multi-user support
- [ ] Data persistence with database integration
- [ ] Advanced filtering and search capabilities
- [ ] Export functionality (CSV, PDF)
- [ ] Budget tracking and spending categories
- [ ] Data visualization with charts and graphs
- [ ] Mobile app development
- [ ] API integration for bank account connections

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**