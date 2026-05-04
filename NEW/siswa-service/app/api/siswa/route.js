import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export const dynamic = 'force-dynamic'; // Prevent static generation

export async function GET() {
  try {
    const result = await pool.query('SELECT NOW() as current_time');
    return NextResponse.json({
      service: 'siswa-service',
      message: 'Database connection successful',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      service: 'siswa-service',
      message: 'Database connection failed',
      error: error.message
    }, { status: 500 });
  }
}
